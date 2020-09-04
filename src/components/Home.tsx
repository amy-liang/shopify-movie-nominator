import * as React from "react";
import styled from "styled-components";
import { action, computed, observable } from "mobx";
import { container } from "../inversify.config";
import TYPES from "../stores/Types";
import { OMDbStore } from "../stores/OMDbStore";
import { observer } from "mobx-react";
import { Colors, Dimensions } from "../stores/Constants";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SearchBar } from "./SearchBar";
import cinema from "../resources/cinema.png";
import trophy from "../resources/trophy.png";
import { Spacer } from "./Spacer";
import { IMovie } from "../stores/Interfaces";
import { Modal } from "./Modal";

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const HalfContainer = styled.div`
    width: 50vw;
    height: 100vh;
    padding: 0px 16px;
    display: flex;
    flex-direction: column;
`;

const InnerContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    margin: 0 16px;
    margin-bottom: ${Dimensions.footerHeight + 12}px;
`;

const PlaceholderContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SearchResultContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 8px;
`;

const Poster = styled.img`
    width: 42px;
    height: 60px;
    object-fit: cover;
`;

const SearchResultTextContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const NominateButton = styled.div`
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
    margin-right: 16px;
    width: 94px;
    height: 30px;
    padding: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: ${props => props.cursor};
    justify-content: center;
`;

const NominationsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 16px 0;
    flex-direction: column;
    margin-bottom: ${Dimensions.footerHeight + 12}px;
`;

@observer
export class Home extends React.Component {
    @observable
    private omdbStore: OMDbStore = container.get(TYPES.OMDbStore);

    @observable
    private showModal: boolean = false;

    @computed
    get showingSearchResults(): boolean {
        return this.omdbStore.searchResults.length > 0;
    }

    @computed
    get hasNominations(): boolean {
        return this.omdbStore.nominations.length > 0;
    }

    componentDidMount() {
        this.omdbStore.setNominationsFromCache();
    }

    private toggleNomination = (nomination: IMovie, isNomination: boolean) => {
        if (isNomination) {
            this.omdbStore.removeNomination(nomination);
        } else if (!this.omdbStore.nominations.includes(nomination)) {
            this.omdbStore.addNomination(nomination);
            if (this.omdbStore.nominations.length >= 5) {
                this.showNominationCompleteModal();
            }
        }
    };

    @action
    private showNominationCompleteModal = () => {
        this.showModal = true;
    };

    @action
    private hideNominationCompleteModal = () => {
        this.showModal = false;
    };

    private renderSearchResultsList = () => {
        return this.omdbStore.searchResults.map(movie =>
            this.renderSearchResult(movie, false)
        );
    };

    private renderNominationsList = () => {
        return this.omdbStore.nominations.map(movie =>
            this.renderSearchResult(movie, true)
        );
    };

    private renderSearchResult = (movie: IMovie, isNomination: boolean) => {
        let buttonText;
        let color = Colors.green;
        let cursor = "pointer";
        if (isNomination) {
            buttonText = "Remove";
            color = Colors.navy;
        } else {
            buttonText = "Nominate";
            if (this.omdbStore.nominations.includes(movie)) {
                color = Colors.gray;
                cursor = "default";
                buttonText = "Nominated!";
            }
        }
        return (
            <SearchResultContainer key={movie.id}>
                <SearchResultTextContainer>
                    <Poster src={movie.poster_url} />
                    <Spacer width={16} />
                    <div>
                        <h4>{movie.title}</h4>
                        <p>{movie.release_year}</p>
                    </div>
                </SearchResultTextContainer>
                <NominateButton
                    onClick={() => this.toggleNomination(movie, isNomination)}
                    color={color}
                    cursor={cursor}
                >
                    {buttonText}
                </NominateButton>
            </SearchResultContainer>
        );
    };

    renderSearchResultsContainer = () => {
        return (
            <HalfContainer>
                <Spacer height={Dimensions.headerHeight} />
                <SearchBar />
                <Spacer height={32} />
                <InnerContainer>
                    {this.showingSearchResults ? (
                        this.renderSearchResultsList()
                    ) : (
                        <PlaceholderContainer>
                            {this.omdbStore.error ? null : (
                                <img
                                    src={cinema}
                                    alt="search placeholder"
                                    width={140}
                                />
                            )}
                            <p>
                                {this.omdbStore.error
                                    ? this.omdbStore.error
                                    : "Search for a movie!"}
                            </p>
                        </PlaceholderContainer>
                    )}
                </InnerContainer>
            </HalfContainer>
        );
    };

    renderNominationsContainer = () => {
        return (
            <HalfContainer>
                <Spacer height={Dimensions.headerHeight} />
                <NominationsContainer>
                    <h2>Nominations</h2>
                    {this.hasNominations ? (
                        this.renderNominationsList()
                    ) : (
                        <PlaceholderContainer>
                            <img
                                src={trophy}
                                alt="nominations placeholder"
                                width={140}
                            />
                            <p>None yet!</p>
                        </PlaceholderContainer>
                    )}
                </NominationsContainer>
            </HalfContainer>
        );
    };

    render() {
        return (
            <React.Fragment>
                {this.showModal ? (
                    <Modal onClick={this.hideNominationCompleteModal} />
                ) : null}
                <Header />
                <RowContainer>
                    {this.renderSearchResultsContainer()}
                    {this.renderNominationsContainer()}
                </RowContainer>
                <Footer />
            </React.Fragment>
        );
    }
}

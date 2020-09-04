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
import { Spacer } from "./Spacer";
import { IMovie } from "../stores/Interfaces";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${Colors.white};
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

const InnerContainer = styled.div`
    width: 50vw;
    height: 100%;
    padding: 0px 16px;
    display: flex;
    flex-direction: column;
`;

const ResultsContainer = styled.div`
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
    border: 1px solid ${Colors.navy};
    color: ${Colors.navy};
    margin-right: 16px;
    height: 30px;
    padding: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    justify-content: center;
`;

const NominationsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    margin: 16px 0;
    flex-direction: column;
`;

@observer
export class Home extends React.Component {
    @observable
    private omdbStore: OMDbStore = container.get(TYPES.OMDbStore);

    @observable
    private isLoading: boolean = false;

    @computed
    get showingSearchResults(): boolean {
        return this.omdbStore.searchResults.length > 0;
    }

    @action
    private setLoading = (loading: boolean) => {
        this.isLoading = loading;
    };

    renderSearchResults = () => {
        return this.omdbStore.searchResults.map(movie =>
            this.renderSearchResult(movie)
        );
    };

    private renderSearchResult = (movie: IMovie) => {
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
                    onClick={() => this.omdbStore.addNomination(movie)}
                >
                    Nominate
                </NominateButton>
            </SearchResultContainer>
        );
    };

    render() {
        return (
            <AppContainer>
                <Header />
                <Row>
                    <InnerContainer>
                        <Spacer height={Dimensions.headerHeight} />
                        <SearchBar />
                        <Spacer height={32} />
                        <ResultsContainer>
                            {this.showingSearchResults ? (
                                this.renderSearchResults()
                            ) : (
                                <PlaceholderContainer>
                                    <img src={cinema} width={140} />
                                    <p>Search for a movie!</p>
                                </PlaceholderContainer>
                            )}
                        </ResultsContainer>
                    </InnerContainer>
                    <InnerContainer>
                        <Spacer height={Dimensions.headerHeight} />
                        <NominationsContainer>
                            <h2>Nominations</h2>
                        </NominationsContainer>
                    </InnerContainer>
                </Row>
                <Footer />
            </AppContainer>
        );
    }
}

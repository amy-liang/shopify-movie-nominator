import * as React from "react";
import styled from "styled-components";
import { action, observable } from "mobx";
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

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: ${Colors.white};
`;

const InnerContainer = styled.div`
    height: 100%;
    padding: 0px 32px;
    display: flex;
    flex-direction: column;
`;

const ResultsContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 3px ${Colors.eggshell} solid;
    margin: 16px;
    align-items: center;
    justify-content: center;
`;

@observer
export class Home extends React.Component {
    @observable
    private omdbStore: OMDbStore = container.get(TYPES.OMDbStore);

    @observable
    private isLoading: boolean = false;

    @observable
    private showingSearchResults: boolean = false;

    @action
    private setLoading = (loading: boolean) => {
        this.isLoading = loading;
    };

    render() {
        return (
            <AppContainer>
                <Header />
                <InnerContainer>
                    <Spacer height={Dimensions.headerHeight} />
                    <SearchBar />
                    <ResultsContainer>
                        {this.showingSearchResults ? (
                            <p>true</p>
                        ) : (
                            <React.Fragment>
                                <img src={cinema} width={140} />
                                <p>Search for a movie!</p>
                            </React.Fragment>
                        )}
                    </ResultsContainer>
                </InnerContainer>
                <Footer />
            </AppContainer>
        );
    }
}

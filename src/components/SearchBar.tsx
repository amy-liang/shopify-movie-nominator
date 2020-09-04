import * as React from "react";
import styled from "styled-components";
import search from "../resources/search.svg";
import { action, observable } from "mobx";
import { OMDbStore } from "../stores/OMDbStore";
import { container } from "../inversify.config";
import TYPES from "../stores/Types";
import { observer } from "mobx-react";
import debounce from "lodash/debounce";

const Container = styled.div`
    display: flex;
    position: relative;
    height: 30px;
    margin-top: 32px;
`;

const SearchIcon = styled.img`
    position: absolute;
    top: 9px;
    left: 10px;
    width: 17px;
`;

const SearchField = styled.input`
    padding: 0 32px;
    width: 100%;
    border-radius: 24px;
    border-size: 0px;
    border: 1px solid lightgray;
    height: 35px;
    font-family: Montserrat;
`;

interface IProps {}

@observer
export class SearchBar extends React.Component<IProps> {
    @observable
    private omdbStore: OMDbStore = container.get(TYPES.OMDbStore);

    @observable
    private query: string = "";

    @action
    onInput = (query: string) => {
        this.omdbStore.searchMovies(query, 1);
    };

    render() {
        const debouncedOnInput = debounce(this.onInput, 500);
        return (
            <Container>
                <SearchIcon src={search} />
                <SearchField
                    className="search"
                    placeholder="Search for a movie"
                    type="text"
                    onChange={event => debouncedOnInput(event.target.value)}
                />
            </Container>
        );
    }
}

import * as React from "react";
import styled from "styled-components";
import { action, observable } from "mobx";
import { container } from "../inversify.config";
import TYPES from "../stores/Types";
import { OMDbStore } from "../stores/OMDbStore";
import { observer } from "mobx-react";

@observer
export class Home extends React.Component {
    @observable
    private omdbStore: OMDbStore = container.get(TYPES.OMDbStore);

    @observable
    private isLoading: boolean = true;

    @action
    private setLoading = (loading: boolean) => {
        this.isLoading = loading;
    };

    componentDidMount() {
        // this.omdbStore
        //     .fetchYoutubeVideos()
        //     .then(() => this.setLoading(false));
    }

    render() {
        return <div>Todo</div>;
    }
}

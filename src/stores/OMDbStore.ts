import { action, observable } from "mobx";
import { injectable } from "inversify";
import { IMovie, IOMDbStore } from "./Interfaces";
import { API_KEY } from "./APIKey";

@injectable()
export class OMDbStore implements IOMDbStore {
    @observable
    query: string | null = null;

    @observable
    nominations: IMovie[] = [];

    @action
    searchMovies = async (query: String, page: number): Promise<IMovie[]> => {
        if (query.trim().length <= 0) {
            return [];
        }

        const queryString = "?s=" + query;
        const pageString = "&p=" + page;
        const apiKeyString = "&apikey=" + API_KEY;

        const axios = require("axios").default;
        try {
            const rawMovies = await axios.get(
                "http://www.omdbapi.com/" +
                    queryString +
                    pageString +
                    apiKeyString
            );
            console.log(rawMovies);
        } catch (error) {
            console.error(error);
        }
        return [];
    };

    public getNominations(): IMovie[] {
        if (this.nominations == null) {
            const localStorageVideos = localStorage.getItem(
                "shopify_movie_nominations_cached"
            );
            if (localStorageVideos != null) {
                // return cached nominations
                return [];
            }
        }
        return this.nominations;
    }

    public addNomination(movie: IMovie) {
        // Todo: Add movie to nomination list and check if 5 have been added
        // Todo: Update cache
        localStorage.setItem(
            "shopify_movie_nominations_cached",
            this.nominations.map(video => JSON.stringify(video)).toString()
        );
    }

    public removeNomination(index: number) {
        // Todo: Remove the movie from the nomination list
    }

    public removeAllNominations() {
        // Todo: Clear the entire nomination list
    }
}

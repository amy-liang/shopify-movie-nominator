import { action, observable } from "mobx";
import { injectable } from "inversify";
import { IMovie, IOMDbMovie, IOMDbStore } from "./Interfaces";
import { API_KEY } from "./APIKey";

@injectable()
export class OMDbStore implements IOMDbStore {
    @observable
    searchResults: IMovie[] = [];

    @observable
    nominations: IMovie[] = [];

    @observable
    error: string | null = null;

    @action
    searchMovies = async (query: String, page: number) => {
        if (query.trim().length <= 0) {
            this.searchResults = [];
            this.error = null;
            return;
        }

        const queryString = "?s=" + query;
        const pageString = "&p=" + page;
        const typeString = "&type=movie";
        const apiKeyString = "&apikey=" + API_KEY;

        const axios = require("axios").default;
        try {
            const rawData = await axios.get(
                "http://www.omdbapi.com/" +
                    queryString +
                    pageString +
                    typeString +
                    apiKeyString
            );
            if (rawData.data.Response === "False") {
                throw rawData.data.Error;
            }
            const movieData = rawData.data.Search;
            this.parseAndSetMovieData(movieData);
        } catch (error) {
            console.error("Error: " + error);
            this.error = error;
        }
    };

    @action
    private parseAndSetMovieData(movieData: IOMDbMovie[]) {
        const results: IMovie[] = [];
        for (const rawMovie of movieData) {
            results.push({
                title: rawMovie.Title,
                release_year: rawMovie.Year,
                poster_url: rawMovie.Poster,
                id: rawMovie.imdbID
            });
        }
        this.searchResults = results;
    }

    @action
    addNomination(movie: IMovie) {
        if (this.nominations.length >= 5) {
            console.log("WOW!");
        } else {
            this.nominations.push(movie);
            this.updateCache();
        }
    }

    @action
    removeNomination(movieToRemove: IMovie) {
        this.nominations = this.nominations.filter(
            movie => movie !== movieToRemove
        );
        this.updateCache();
    }

    private updateCache() {
        localStorage.setItem(
            "shopify_movie_nominations_cached",
            this.nominations.map(movie => JSON.stringify(movie)).toString()
        );
    }
}

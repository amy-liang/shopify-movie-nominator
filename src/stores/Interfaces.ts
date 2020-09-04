export interface IOMDbMovie {
    Title?: string;
    Year?: string;
    Poster?: string;
    imdbID?: string;
}

export interface IMovie {
    title?: string;
    release_year?: string;
    poster_url?: string;
    id?: string;
}

export interface IOMDbStore {
    searchResults: IMovie[];
    nominations: IMovie[];
    error: string | null;
    searchMovies: (query: string, pageToken: number) => void;
    addNomination: (nomination: IMovie) => void;
    removeNomination: (movieToRemove: IMovie) => void;
    setNominationsFromCache: () => void;
}

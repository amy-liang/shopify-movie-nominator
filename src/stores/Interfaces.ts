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
    searchMovies: (query: string, pageToken: number) => Promise<IMovie[]>;
    getNominations: () => IMovie[];
    addNomination: (nomination: IMovie) => void;
    removeNomination: (index: number) => void;
    removeAllNominations: () => void;
}

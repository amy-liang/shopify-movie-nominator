export interface IMovie {
    title?: string;
    release_year?: string;
    poster_url?: string;
    id?: string;
}

export interface IOMDbStore {
    nominations: IMovie[];
    searchMovies: (query: string, pageToken: number) => Promise<IMovie[]>;
    getNominations: () => IMovie[];
    addNomination: (nomination: IMovie) => void;
    removeNomination: (index: number) => void;
    removeAllNominations: () => void;
}

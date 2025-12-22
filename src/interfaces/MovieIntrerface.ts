export interface MovieInterface {
    id: number;
    title: string;
    poster_path: null|string;
    vote_average:number
}

export interface SingleMovieInterface {
    id:number;
    title:string;
    poster_path: string|null;
    vote_average:number;
    overview:string;
    release_date:string;
    backdrop_path:string;
}
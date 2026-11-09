import { GenreFilm } from "./genre";

export interface Film{
    id:string,
    titre:string,
    duree:number,
    genre:GenreFilm,
    ageMin:number
}
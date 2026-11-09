import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Film } from '../type/film';
import { GenreFilm } from "../type/genre";
import { Client } from '../type/client';

function peutVoirFilm(client:Client,film:Film):boolean{
  return client.age>=film.ageMin;
}

function premierElement<T>(tab:T[]):T{
    return tab[0];
}
type Calculatrice=(x:number)=> number;


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  protected readonly title = signal('ReservationCinema');
  films: Film[] = [
    {
        id: "1",
        titre: "Gladiator",
        duree: 155,
        genre: GenreFilm.Action,
        ageMin: 16
    },
    {
        id: "2",
        titre: "Le Seigneur des Anneaux",
        duree: 178,
        genre: GenreFilm.Fantastique,
        ageMin: 12
    },
    {
        id: "3",
        titre: "Shrek",
        duree: 90,
        genre: GenreFilm.Comedie,
        ageMin: 0
    },
    {
        id: "4",
        titre: "Interstellar",
        duree: 169,
        genre: GenreFilm.ScienceFiction,
        ageMin: 12
    },
    {
        id: "5",
        titre: "Titanic",
        duree: 195,
        genre: GenreFilm.Romance,
        ageMin: 12
    }
];
  clients: Client[] = [
    {
        id: "1",
        nom: "Jean Dupont",
        age: 25,
        email: "jean.dupont@gmail.com"
    },
    {
        id: "2",
        nom: "Marie Martin",
        age: 32,
        email: "marie.martin@gmail.com"
    },
    {
        id: 3,
        nom: "Lucas Bernard",
        age: 19
    }
];
 reduction:Calculatrice = x => x*0.9;
  
}

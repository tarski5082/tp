import { Client } from "./client";
import { Film } from "./film";

export class Reservation{
    private client:Client;
    readonly film:Film;
    public nbreDePlace:number;
    readonly prixUnitaire:number;

    constructor(client:Client,film:Film,nbreDePlace:number,prixUnitaire:number){
        this.client = client;
        this.film = film;
        this.nbreDePlace=nbreDePlace;
        this.prixUnitaire=prixUnitaire;
    }

    public getClient():Client{
        return this.client;
    }

    public calculerTotal():number{
        return this.prixUnitaire*this.nbreDePlace;
    }
}
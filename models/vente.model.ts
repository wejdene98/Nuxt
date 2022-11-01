import { Client } from "./client.model";
import { Vehicle } from "./vehicule.model";

//class vente
export class Vente {
  id: number;
  date: Date;
  client: Client;
  vehicule: Vehicle;
  prix: number;

  constructor(
    id: number,
    date: Date,
    client: Client,
    vehicule: Vehicle,
    prix: number
  ) {
    this.id = id;
    this.date = date;
    this.client = client;
    this.vehicule = vehicule;
    this.prix = prix;
  }
  // toString
  public toString(): string {
    return `Id: ${this.id} Date: ${
      this.date
    } Client: ${this.client.toString()} Vehicule: ${this.vehicule.toString()} Prix: ${
      this.prix
    }`;
  }
  // * Getters
  public getId(): number {
    return this.id;
  }
  public getDate(): Date {
    return this.date;
  }
  public getClient(): Client {
    return this.client;
  }
  public getVehicule(): Vehicle {
    return this.vehicule;
  }
  public getPrix(): number {
    return this.prix;
  }
  // * Setters
  public setId(id: number): void {
    this.id = id;
  }
  public setDate(date: Date): void {
    this.date = date;
  }
  public setClient(client: Client): void {
    this.client = client;
  }
  public setVehicule(vehicule: Vehicle): void {
    this.vehicule = vehicule;
  }
  public setPrix(prix: number): void {
    this.prix = prix;
  }
}


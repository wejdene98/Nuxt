import { VehiculeInterface } from "../interfaces/vehicule.interface";



export class Vehicle implements VehiculeInterface {
  id: number;
  matricule: string;
  price: number;


  constructor(id: number, matricule: string, price: number) {
    this.id = id;
    this.matricule = matricule;
    this.price = price;

  }

 // * toString
  public toString(): string {
    return `Id: ${this.id} Name: ${this.matricule} Price: ${this.price}`;
  }


  // * Getters

  public getId(): number {
    return this.id;
  }
  public getMatricule(): string {
    return this.matricule;
  }
  public getPrice(): number {
    return this.price;
  }
 

  // * Setters

  public setId(id: number): void {
    this.id = id;
  }
  public setMatricule(matricule: string): void {
    this.matricule = matricule;
  }
  public setPrice(price: number): void {
    this.price = price;
  }

}

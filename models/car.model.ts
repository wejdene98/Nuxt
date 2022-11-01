import { Vehicle } from "./vehicule.model";


export class Car extends Vehicle {
   numberOfSeats: number;

  constructor(id: number, name: string, price: number, numberOfSeats: number) {
    super(id, name, price);
    this.numberOfSeats = numberOfSeats;
  }

  public toString(): string {
    return super.toString() + ` Number of Seats: ${this.numberOfSeats}`;
  }

  // * Getters

  public getNumberOfSeats(): number {
    return this.numberOfSeats;
  }

  // * Setters

  public setNumberOfSeats(numberOfSeats: number): void {
    this.numberOfSeats = numberOfSeats;
  }
}

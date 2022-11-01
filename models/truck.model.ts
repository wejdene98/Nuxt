import { Vehicle } from "./vehicule.model";



export class Truck extends Vehicle {
   carryWeight: number;

  constructor(id: number, name: string, price: number, carryWeight: number) {
    super(id, name, price);
    this.carryWeight = carryWeight;
  }

  public toString(): string {
    return super.toString() + ` Carry Weight: ${this.carryWeight}`;
  }

  // * Getters

  public getCarryWeight(): number {
    return this.carryWeight;
  }

  // * Setters

  public setCarryWeight(carryWeight: number): void {
    this.carryWeight = carryWeight;
  }
}

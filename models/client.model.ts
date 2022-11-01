import { ClientInterface } from "../interfaces/client.interface";


export class Client implements ClientInterface {
   id: number;
   fullname: string;
   email: string;

  constructor(id: number, fullname: string, email: string) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
  }

  public toString(): string {
    return `Id: ${this.id} Fullname: ${this.fullname} Email: ${this.email}`;
  }

  // * Getters

  public getId(): number {
    return this.id;
  }

  public getFullname(): string {
    return this.fullname;
  }
  public getEmail(): string {
    return this.email;
  }
  // * Setters

  public setId(id: number): void {
    this.id = id;
  }
  public setFullname(fullname: string): void {
    this.fullname = fullname;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
}
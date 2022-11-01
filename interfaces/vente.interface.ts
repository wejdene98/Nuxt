import { ClientInterface } from "./Client.interface";
import { VehiculeInterface } from "./vehicule.interface";

export interface VenteInterface {
  id: number;
  date: Date;
  client: ClientInterface;
  vehicule: VehiculeInterface;
  prix: number;
}

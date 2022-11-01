import { CarInterface } from "~/interfaces/car.interface";
import { ClientInterface } from "~/interfaces/Client.interface";
import { Car } from "~/models/car.model";
import { TruckInterface } from "~/interfaces/truck.interface";
import { Client } from "~/models/client.model";
import { Truck } from "~/models/truck.model";
import { VenteInterface } from "~/interfaces/vente.interface";

interface stateInterface {
  clients: ClientInterface[];
  cars: CarInterface[];
  trucks: TruckInterface[];
  ventes: VenteInterface[];
}

export const state: stateInterface = {
  clients: [],
  cars: [],
  trucks: [],
  ventes: []
};

export const mutations = {
  ADD_CLIENT(state: stateInterface, newClient: ClientInterface) {
    const id = state.clients.length + 1;
    const client: ClientInterface = new Client(
      id,
      newClient.fullname,
      newClient.email
    );
    state.clients.push(client);
  },
  DELETE_CLIENT(state: stateInterface, id: number) {
    state.clients = state.clients.filter((client) => client.id !== id);
  },

  ADD_CAR(state: stateInterface, newCar: CarInterface) {
    const id = state.cars.length + 1;
    const isMatriculeUniqueInCars = state.cars.every(
      (car) => car.matricule !== newCar.matricule
    );
    const isMatriculeUniqueInTrucks = state.trucks.every(
      (truck) => truck.matricule !== newCar.matricule
    );

    if (!isMatriculeUniqueInCars || !isMatriculeUniqueInTrucks) {
      alert("Matricule must be unique");
    } else {
      const car: CarInterface = new Car(
        id,
        newCar.matricule,
        newCar.price,
        newCar.numberOfSeats
      );
      state.cars.push(car);
    }
  },
  DELETE_CAR(state: stateInterface, id: number) {
    state.cars = state.cars.filter((car) => car.id !== id);
  },
  ADD_TRUCK(state: stateInterface, newTruck: TruckInterface) {
    const id = state.trucks.length + 1;

    const isMatriculeUniqueInCars = state.cars.every(
      (car) => car.matricule !== newTruck.matricule
    );
    const isMatriculeUniqueInTrucks = state.trucks.every(
      (truck) => truck.matricule !== newTruck.matricule
    );
    if (!isMatriculeUniqueInCars || !isMatriculeUniqueInTrucks) {
      alert("Matricule must be unique");
    } else {
      const truck: TruckInterface = new Truck(
        id,
        newTruck.matricule,
        newTruck.price,
        newTruck.carryWeight
      );
      state.trucks.push(truck);
    }
  },
  DELETE_TRUCK(state: stateInterface, id: number) {
    state.trucks = state.trucks.filter((truck) => truck.id !== id);
  },

  ADD_VENTE(state: stateInterface, newVente: any) {
    const id = state.ventes.length + 1;
    const clientID = newVente.client;
    const client = state.clients.find((client) => client.id === clientID) as ClientInterface;

    const vente: VenteInterface = {
      id,
      date: new Date(newVente.date),
      client,
      vehicule: newVente.vehicule,
      prix: newVente.prix
    };
    state.ventes.push(vente);
  },
  DELETE_VENTE(state: stateInterface, id: number) {
    state.ventes = state.ventes.filter((vente) => vente.id !== id);
  }

};

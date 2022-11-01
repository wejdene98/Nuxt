<template>
  <main>
    <div>
      <h1>List of clients</h1>
      <div class="create-new">
        <input type="text" v-model="newClient.fullname" placeholder="fullname" @keypress.enter="addClient" />
        <input type="email" v-model="newClient.email" placeholder="email" @keypress.enter="addClient" />
        <button @click="addClient">Add Client</button>
      </div>

      <div class="clients">
        <table class="table table-striped">
          <tr>
            <th>Client ID</th>
            <th>Fullname</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          <Client v-for="(client, i) in $store.state.clients" key="i" :client="client" />
        </table>
      </div>
    </div>
    <div>
      <h1>List of cars</h1>
      <div class="create-new">
        <input type="text" v-model="newCar.matricule" placeholder="car" @keypress.enter="addCar" />
        <input type="text" v-model="newCar.price" placeholder="price car" @keypress.enter="addCar" />
        <input type="text" v-model="newCar.numberOfSeats" placeholder="numberOfSeats" @keypress.enter="addCar" />

        <button @click="addCar">Add Car</button>
      </div>

      <table class="table table-striped">
        <tr>
          <th>Cars ID</th>
          <th>Matricule Cars</th>
          <th>Price</th>
          <th>Number Of Seats</th>
          <th>Actions</th>
        </tr>
        <Car v-for="(car, i) in $store.state.cars" key="i" :car="car" />
      </table>
    </div>

    <div>
      <h1>List of trucks</h1>
      <div class="create-new">
        <input type="text" v-model="newTruck.matricule" placeholder="truck" @keypress.enter="addTruck" />
        <input type="text" v-model="newTruck.price" placeholder="price truck" @keypress.enter="addTruck" />
        <input type="text" v-model="newTruck.carryWeight" placeholder="carryWeight" @keypress.enter="addTruck" />

        <button @click="addTruck">Add Truck</button>
      </div>

      <div class="trucks">
        <table class="table table-striped">
          <tr>
            <th>Truck ID</th>
            <th>Matricule trucks</th>
            <th>Price</th>
            <th>CarryWeight</th>
            <th>Actions</th>
          </tr>
          <Truck v-for="(truck, i) in $store.state.trucks" key="i" :truck="truck" />
        </table>
      </div>
    </div>


    <div v-if="($store.state.trucks.length + $store.state.cars.length > 0) && $store.state.clients.length > 0">
      <div>
        <h1 class="cnt">List of sale</h1>
        <div>

          <label for="clients">Choose a date:</label>

          <input type="date" id="date" name="date" v-model="newVente.date" @keypress.enter="addVente" />


          <label for="clients">Choose a client:</label>
          <select name="clients" id="clients" v-model="newVente.client">
            <option v-for="client in $store.state.clients" :value="client.id">{{ client.fullname }}</option>
          </select>
          <label for="cars">Choose a vehicle:</label>
          <select name="cars" id="cars" v-model="newVente.vehicule">
            <option v-for="car in $store.state.cars" :value="car.matricule">{{ car.matricule }}</option>
            <option v-for="truck in $store.state.trucks" :value="truck.matricule">{{ truck.matricule }}</option>
          </select>

          <input type="text" v-model="newVente.prix" placeholder="prix" @keypress.enter="addVente" />

          <button @click="addVente">Add Sale</button>
        </div>

        <div class="ventes">
          <table class="table table-striped">
            <tr>
              <th>Vente ID</th>
              <th>Date</th>
              <th>Client</th>
              <th>Vehicule</th>
              <th>Prix</th>
              <th>Actions</th>
            </tr>
            <Vente v-for="(vente, i) in $store.state.ventes" key="i" :vente="vente" />
          </table>
        </div>
      </div>
    </div>





  </main>
</template>

<script>
export default {
  data() {
    return {
      newClient: {
        fullname: "",
        email: "",
      },
      newCar: {
        matricule: "",
        price: "",
        numberOfSeats: "",
      },
      newTruck: {
        matricule: "",
        price: "",
        carryWeight: "",
      },
      newVente: {
        date: new Date(),
        client: "",
        vehicule: "",
        prix: "",
      },
    };
  },
  methods: {
    addClient() {
      if (this.newClient.fullname && this.newClient.email) {
        this.$store.commit("ADD_CLIENT", this.newClient);
        this.newClient.fullname = "";
        this.newClient.email = "";
      }
    },
    addCar() {
      if (this.newCar.matricule && this.newCar.price && this.newCar.numberOfSeats) {
        this.$store.commit("ADD_CAR", this.newCar);

        this.newCar.matricule = "";
        this.newCar.price = "";
        this.newCar.numberOfSeats = "";
      }
    },
    addTruck() {
      if (
        this.newTruck.matricule &&
        this.newTruck.price &&
        this.newTruck.carryWeight
      ) {
        this.$store.commit("ADD_TRUCK", this.newTruck);

        this.newTruck.matricule = "";
        this.newTruck.price = "";
        this.newTruck.carryWeight = "";
      }
    },
    addVente() {
      if (
        this.newVente.date &&
        this.newVente.client &&
        this.newVente.vehicule &&
        this.newVente.prix
      ) {
        this.$store.commit("ADD_VENTE", this.newVente);

        this.newVente.date = "";
        this.newVente.client = "";
        this.newVente.vehicule = "";
        this.newVente.prix = "";
      }
    },

  },
};
</script>
<style>

</style>
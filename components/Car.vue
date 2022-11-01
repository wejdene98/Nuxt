<template>
	<tr>
		<td>{{car.id }}</td>
		<td>{{car.matricule }}</td>
		<td>{{car.price }}</td>
		<td>{{car.numberOfSeats }}</td>
		<td>
			<!-- <button class="btn btn-secondary btn-sm">Edit</button> -->
			<button @click="deleteCar(car.id)" class="btn btn-danger btn-sm">Delete</button>
		</td>
	</tr>

</template>

<script>
export default {
	props: ['car'],
	methods: {
		deleteCar(id) {
			this.$store.commit('DELETE_CAR', id);
		},
	}
}
</script>

<style>

</style>
<template>
	<tr>
        
		<td>{{ vente.id }}</td>
		<!-- display dd/mm/yyyy -->
		<td>{{ new Date(vente.date).toLocaleDateString() }}</td>
		<td>{{ vente.client.fullname }}</td>
        <td>{{ vente.vehicule }}</td>
        <td>{{ vente.prix }}</td>
		<td>
			<!-- <button class="btn btn-secondary btn-sm">Edit</button> -->
			<button @click="deleteVente(vente.id)" class="btn btn-danger btn-sm">Delete</button>
		</td>
	</tr>

</template>

<script>
export default {
	props: ['vente'],
	methods: {
		deleteVente(id) {
			this.$store.commit('DELETE_VENTE', id);
		},
	}
}
</script>

<style>

</style>
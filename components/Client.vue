<template>
	<tr>
		<td>{{ client.id }}</td>
		<td>{{ client.fullname }}</td>
		<td>{{ client.email }}</td>
		<td>
			<!-- <button class="btn btn-secondary btn-sm">Edit</button> -->
			<button @click="deleteClient(client.id)" class="btn btn-danger btn-sm">Delete</button>
		</td>
	</tr>

</template>

<script>
export default {
	props: ['client'],
	methods: {
		deleteClient(id) {
			this.$store.commit('DELETE_CLIENT', id);
		},
	}
}
</script>

<style>

</style>
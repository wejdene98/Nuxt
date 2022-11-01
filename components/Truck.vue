<template>
    <tr>
        <td>{{ truck.id }}</td>
        <td>{{ truck.matricule }}</td>
        <td>{{ truck.price }}</td>
        <td>{{ truck.carryWeight }}</td>
        <td>
            <!-- <button class="btn btn-secondary btn-sm">Edit</button> -->
            <button @click="deleteTruck(truck.id)" class="btn btn-danger btn-sm">Delete</button>
        </td>
    </tr>

</template>

<script>
export default {
    props: ['truck'],
    methods: {
        deleteTruck(id) {
            this.$store.commit('DELETE_TRUCK', id);
        },
    }
}
</script>

<style>

</style>
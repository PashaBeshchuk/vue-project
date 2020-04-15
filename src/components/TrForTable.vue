<template>
   <tr>
       <td>{{index+1}} </td>
       <td>{{data.name}}</td>
       <td>{{data.surname}}</td>
       <td>{{data.phone}}</td>
       <td>{{data.email}}</td>
       <td>
           <button v-on:click="deleteUser(index)">delete</button>
       </td>
       <td>
          <router-link to="/edit" tag="button" v-on:click.native='searchUserForEditing(index)'>edit</router-link>
       </td>
   </tr>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props:{
        data: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: mapMutations(['deleteUser','searchUserForEditing']),
}
</script>

<style scoped>
    tr {
        border: 1px solid black;
    }
    td {
        border: 1px solid black;
    }
</style>
<template>
    <div>
        <h1>User Table</h1>
        <router-link to="/edit" tag="button" id='add_user'>Add user</router-link>
        <div id='tabble_block'>
            <table>
                <HeadTable/>
                <TrForTable 
                    v-for='(user, index) in getUsers'
                    v-bind:data=user 
                    v-bind:index=index 
                    v-bind:key=index 
                />
            </table>
        </div>
    </div>
</template>

<script>


import HeadTable from './HeadTable'
import TrForTable from './TrForTable'
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: mapGetters(["getUsers"]),
    methods:mapMutations(["convertArrayUsersToJson", "getUsersJsonFromLocalStorage"]),
    components:{
        TrForTable, HeadTable
    },
    mounted(){
        if(!localStorage.getItem('users')){
            this.convertArrayUsersToJson()
        } else {
            this.getUsersJsonFromLocalStorage()
        }
        
    }
}
</script>

<style scoped>
    button#add_user {
        width: 100px;
        height: 30px;
        margin-bottom: 10px;
        margin-left: 17%;
    }
    #tabble_block {
        margin-left: 30%;
    }
    table {
        border-spacing: 0;
    }
    tr {
        border: 1px solid black;
    }
    td {
        border: 1px solid black;
    }
</style>
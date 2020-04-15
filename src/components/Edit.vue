<template>
    <div>
        <h1>Edit Page</h1>
        <h2>Add User</h2>
        <router-link to="/" tag="button" v-on:click.native='clearEdit'>Home</router-link>
        <table>
            <HeadForEdit/>
            <tr>
                <td><input type='text' v-model="newUser.name" placeholder="name"/></td>   
                <td><input type='text' v-model="newUser.surname" placeholder="surname"/></td>   
                <td><input type='text' v-model="newUser.phone" placeholder="phone"/></td>   
                <td><input type='text' v-model="newUser.email" placeholder="email"/></td>     
                <td><router-link to="/" v-on:click.native='addNewUser(newUser)' tag="button">Add User</router-link></td>   
                
            </tr>      
        </table>
        <div v-if="getUserToEdit.name.trim()">
            <h2>Edit Users</h2> 
            <table>
                <HeadForEdit />
                <tr>
                    <td><input type='text' v-model="getUserToEdit.name" placeholder="name"/></td>  
                    <td><input type='text' v-model="getUserToEdit.surname" placeholder="surname"/></td>  
                    <td><input type='text' v-model="getUserToEdit.phone" placeholder="phone"/></td>  
                    <td><input type='text' v-model="getUserToEdit.email" placeholder="email"/></td>
                    <td><router-link to="/" tag="button" v-on:click.native='saveChangedUser(getUserToEdit.id)'>save</router-link></td> 

                </tr>  
            </table> 
        </div> 
        <h2>Import JSON</h2>
        <div>
            <textarea v-model="jsonData">
            </textarea>
        </div>
        <router-link id='json' to="/" tag="button" v-on:click.native='clearJsonData, addJsonDataInUsers(jsonData)' >save</router-link>
    </div>
</template>

<script>
import HeadForEdit from './HeadForEdit'
import { mapMutations, mapGetters } from 'vuex'

export default {
    data: function () {
        return {
            newUser:{
                name:'',
                surname:'',
                phone:'',
                email:'',
            },
            jsonData:[]
        }
    },
    methods:{
        ...mapMutations(['addNewUser', 'addJsonDataInUsers', 'saveChangedUser', 'clearEdit']),
        clearJsonData() {
            this.jsonData = []
        },
    },
    computed:mapGetters(['getUserToEdit']),
    components: {
       HeadForEdit
    }
}
</script>

<style scoped>
    table {
        border-spacing: 0;
    }
    textarea {
        resize: none;
        width: 80%;
        height: 200px;
    }
    button#json{ 
        width: 80%;
    }
    tr {
        border: 1px solid black;
    }
    td {
        border: 1px solid black;
    }
</style>
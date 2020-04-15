export default {
    actions:{},
    mutations:{
        deleteUser(state, id) {
            state.users.splice(id,1)
            localStorage.setItem('users', JSON.stringify(state.users))
        },
        addNewUser(state, newUser) {    
            for(let elem in newUser) {
                if(!newUser[elem]) return
            }
            state.users.unshift(newUser)
            localStorage.setItem('users', JSON.stringify(state.users))
        },
        searchUserForEditing(state, id){
            state.userToEdit = state.users[id]
            state.userToEdit.id = id
        },
        saveChangedUser(state, id){ 
            for(let elem in state.userToEdit) {
                if(!state.userToEdit[elem]) return
            }
            delete state.userToEdit.id
            state.users[id] = state.userToEdit
            state.users= [...state.users]
            localStorage.setItem('users', JSON.stringify(state.users))
            state.userToEdit = {"name":"", "surname":"", "phone":"", "email":""}
        },
        addJsonDataInUsers(state, json) {
            if(json.length === 0) return
            if(json[json.length-1] === ','){
                json = json.substring(0, json.length - 1)
            }
            if(json[0] !== '['){
                json = '[' + json
            }
            if(json[json.length-1] !== ']') {
                json = json + ']'
            }
            state.users = state.users.concat(JSON.parse(json))
            localStorage.setItem('users', JSON.stringify(state.users))

        },
        convertArrayUsersToJson(state){
            localStorage.setItem('users', JSON.stringify(state.users))
        },
        getUsersJsonFromLocalStorage(state){
            state.users = JSON.parse(localStorage.getItem('users'))
        },
        clearEdit(state){
            state.userToEdit = {"name":"", "surname":"", "phone":"", "email":""} 
        }
    },
    state:{
        users:[
            {"name":"Olyaa", "surname":"Pupkina", "phone":"+23480234", "email":"OlyaPupkina@gmail.com"},
            {"name":"Olyab", "surname":"Pupkina", "phone":"+23480234", "email":"OlyaPupkina@gmail.com"},
            {"name":"Olyac", "surname":"Pupkina", "phone":"+23480234", "email":"OlyaPupkina@gmail.com"},
            {"name":"Olyad", "surname":"Pupkina", "phone":"+23480234", "email":"OlyaPupkina@gmail.com"},
            {"name":"Olyaf", "surname":"Pupkina", "phone":"+23480234", "email":"OlyaPupkina@gmail.com"},
            {"name":"Olyag", "surname":"Pupkina", "phone":"+23480234", "email":"OlyaPupkina@gmail.com"},
            {"name":"Olyah", "surname":"Pupkina", "phone":"+23480234", "email":"OlyaPupkina@gmail.com"},
            {"name":"Olyal", "surname":"Pupkina", "phone":"+23480234", "email":"OlyaPupkina@gmail.com"},
        ],
        userToEdit:{"name":"", "surname":"", "phone":"", "email":""},
    },
    getters:{
        getUsers(state){
            return state.users
        },
        getNewUser(state) {
            return state.newUsers
        },
        getUserToEdit(state) {
            return state.userToEdit
        }
    },
}
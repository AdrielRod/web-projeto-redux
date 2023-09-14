import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    users: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        createUser: (state, action) => {
            console.log(state.user)
            return {
                ...state,
                user:{
                    name: action.payload.name,
                    email: action.payload.email,
                    address: null,

                }
            }
        },
        logoutUser: (state) => {
            return{
                ...state,
                user: null
            }
        },
        addAddress: (state, action) => {
            if(action.payload.location === '' || action.payload.number === ''){
                alert("Preencha todos os campos")
                return{...state}
            }
            return{
                ...state,
                user: {
                    ...state.user,
                    address:{
                        location: action.payload.location,
                        number: action.payload.number
                    }

                }
            }
        },
        deletAddress: (state, action) => {
            return {
                ...state,
                user: {
                    ...state.user,
                    address: null
                }
            }
        },
        fetchUsers: (state) => {

        },
        fetchUsersSucess: (state, action) => {
            console.log("HTTP 200")
            state.users = action.payload
        },
        fetchUsersFailure: (state, action) => {
            console.log("HTTP 400")
            console.log(action.payload)
        },

    }
})

export const {createUser, logoutUser, addAddress, deletAddress, fetchUsers, fetchUsersFailure, fetchUsersSucess} = userSlice.actions
export default userSlice.reducer
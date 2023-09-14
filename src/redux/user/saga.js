import {all, takeEvery, call, put} from 'redux-saga/effects'
import { fetchUsersFailure, fetchUsersSucess } from './slice'

import axios from 'axios'
//API https://jsonplaceholder.typicode.com/users/

function* fetchUsers(){
    try{
        const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/" )
        yield put(fetchUsersSucess(response.data))
    }catch(err){
        console.log(err)
        yield put(fetchUsersFailure(err.message))
    }
}

export default all([
    takeEvery("user/fetchUsers", fetchUsers)
])
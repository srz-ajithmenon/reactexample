import {put, call, takeEvery} from 'redux-saga/effects'
import axios from 'axios'

function fetchUserData() {
    return axios({
        method: "get",
        url: "http://localhost:8000/users/",
    });
}

function* getUserSaga() {
    const response = yield call(fetchUserData);
    console.log("output", response)
    yield put({type: 'GET_USER_INFO_SUCCESS', userInfo: response.data})
    
}


function* postUserSaga (action) {
    try{
        const udata = action.payload;
        const res = yield call(axios.post,"http://localhost:8000/users/",udata);      
        console.log("output", res)
        yield put({type:'POST_USER_INFO_SUCCESS',userInfo : res.data});
      }
      catch (e) { console.log('error',e) }
}

function* delUserSaga (action) {
    try{
        const ddata = action.payload;
        const res = yield call(axios.delete,"http://localhost:8000/users/"+ddata);
        yield put({type:'GET_USER_INFO'});
      }
      catch (e) { console.log('error',e) }
}

function* updUserSaga (action) {
    try{
        const udata = action.payload;
        const res = yield call(axios.put,"http://localhost:8000/users/"+udata.id,udata);
        yield put({type:'GET_USER_INFO'});
      }
      catch (e) { console.log('error',e) }
}


export function* watchUserContainer(){
    yield takeEvery('GET_USER_INFO', getUserSaga)
    yield takeEvery('POST_USER_INFO', postUserSaga)
    yield takeEvery('DEL_USER_INFO', delUserSaga)
    yield takeEvery('UPD_USER_INFO', updUserSaga)
}
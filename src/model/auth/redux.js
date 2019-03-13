// actionType
import axios from "axios/index";

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS';

// actionCreators
export function logIn() {
  return {type: LOG_IN};
}
export function logOut() {
  return {type: LOG_OUT};
}
export function userData(data) {
  return {type: GET_USER_DATA_SUCCESS, payload:data}
}

export function getUserData() {
  return dispatch => {
    axios.get('/data').then((res) => {
      dispatch(userData(res.data))
    })
  }
}

// reducer
export function auth(state={isLogin:false, name:'wangchanghong'}, action) {
  switch (action.type){
    case GET_USER_DATA_SUCCESS:
      return {...state, user: action.payload[0].user, age: action.payload[0].age};
    case LOG_IN:
      return {...state, isLogin: true};
    case LOG_OUT:
      return {...state, isLogin: false};
    default:
      return state;
  }
}
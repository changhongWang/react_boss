// actionType
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// actionCreators
export function logIn() {
  return {type: LOG_IN};
}
export function logOut() {
  return {type: LOG_OUT};
}

// reducer
export function auth(state={isLogin:false, name:'wangchanghong'}, action) {
  switch (action.type){
    case LOG_IN:
      return {...state, isLogin: true};
    case LOG_OUT:
      return {...state, isLogin: false};
    default:
      return state;
  }
}
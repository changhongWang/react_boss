// combine reducers
import {combineReducers} from 'redux';
import {counter} from './redux';
import {auth} from './auth/redux';

export default combineReducers({
  counter,
  auth
});
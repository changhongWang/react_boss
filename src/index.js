import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Auth from './page/Auth';
import Dashboard from './page/Dashboard';
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {counter} from "./model/redux";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():()=>{}
));

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/login' component={Auth}></Route>
            <Route path='/dashboard' component={Dashboard}></Route>
            <Redirect to='dashboard' />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
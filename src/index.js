import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Auth from './page/Auth';
import Dashboard from './page/Dashboard';
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./model/reducers";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
));

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Auth}></Route>
          <Route path='/dashboard' component={Dashboard}></Route>
          <Redirect to='dashboard' />
        </Switch>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
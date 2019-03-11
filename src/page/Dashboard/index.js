import React, {Component} from 'react';
import App from "../../App";
import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom';

const News = function () {
  return (
    <div>News Here</div>
  )
};
const Nav = function () {
  return (
    <div>Nav Here</div>
  )
};

class Test extends React.Component{
  render() {
    return (<div>Error Page</div>)
  }
}

class Dashboard extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to='/dashboard/app'>App</Link></li>
              <li><Link to='/dashboard/news' >News</Link></li>
              <li><Link to='/dashboard/nav'>Nav</Link></li>
            </ul>
            <Switch>
              <Route path='/dashboard/app' component={App}/>
              <Route path='/dashboard/news' component={News}/>
              <Route path='/dashboard/nav' component={Nav}/>
              <Route path='/dashboard/:location' component={Test}/>
            </Switch>
          </div>
        </BrowserRouter>
    )
  }
}

export default Dashboard;
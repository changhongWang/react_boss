import React, {Component} from 'react';
import App from "../../App";
import { connect } from 'react-redux';
import { logOut } from "../../model/auth/redux";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Redirect
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

class Err extends React.Component{
  render() {
    return (<div>Error Page</div>)
  }
}

@connect(
  state => state.auth,
  {logOut}
)
class Dashboard extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    const { isLogin, match } = this.props;
    const jumpToLogin = (
      <Redirect to='/login'>去登录</Redirect>
    )
    const app = (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to={`${match.url}/app`}>App</Link></li>
            <li><Link to={`${match.url}/news`}>News</Link></li>
            <li><Link to={`${match.url}/nav`}>Nav</Link></li>
          </ul>
          <Switch>
            <Route path={`${match.url}/app`} component={App}/>
            <Route path={`${match.url}/news`} component={News}/>
            <Route path={`${match.url}/nav`} component={Nav}/>
            <Route path={`${match.url}/:location`} component={Err}/>
          </Switch>
          <button onClick={this.props.logOut}>注销</button>
        </div>
      </BrowserRouter>
    );
    return (
      isLogin ? app : jumpToLogin
    )
  }
}

export default Dashboard;
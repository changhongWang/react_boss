import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logIn } from "../../model/auth/redux";
import { Redirect } from 'react-router-dom';

@connect(
  state => state.auth ,
  {logIn}
)
class Auth extends Component{
  constructor(props) {
    super(props);
  }
  render() {
    const { isLogin } = this.props;
    return (
      <div>
        {isLogin ? <Redirect to='/dashboard'/> : null}
        <h2>没有权限，请登录</h2>
        <button onClick={this.props.logIn}>登录</button>
      </div>
    )
  }
}

export default Auth;
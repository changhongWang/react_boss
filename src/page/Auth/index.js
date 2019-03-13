import React, {Component} from 'react';
import { connect } from 'react-redux';
import { logIn, getUserData } from "../../model/auth/redux";
import { Redirect } from 'react-router-dom';

@connect(
  state => state.auth ,
  {logIn, getUserData}
)
class Auth extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getUserData();
  }
  render() {
    const { isLogin, user, age } = this.props;
    console.log(this.props)
    return (
      <div>
        <h1>UserName: {user} Age: {age}</h1>
        {isLogin ? <Redirect to='/dashboard'/> : null}
        <h2>没有权限，请登录</h2>
        <button onClick={this.props.logIn}>登录</button>
      </div>
    )
  }
}

export default Auth;
import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {addGun, removeGun, addGunAsync} from "./model/redux";

@connect(
  state => ({num: state}),
  {addGun, removeGun, addGunAsync}
)
class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.addGun}>Add Gun</button>
        <button onClick={this.props.removeGun}>Remove Gun</button>
        <button onClick={this.props.addGunAsync}>Add Gun Async</button>
        <div>
          Gun Number: {this.props.num}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje';

/*function Mensaje(props){
  var element = <h1>hola {props.msg}</h1>
  return element
}*/


class MiComponente extends Component {
  constructor(props){
    super(props)
    this.state = { mensajeIn: this.props.variable }

  }
  render() {
    var mundo="Mundo feliz";
    return (
      <div className="App">
        <Mensaje msg="amigos"/> 

        <p>ader className="App-header"</p>

        <Mensaje msg="dos"/>
        {/*}
        <h1>hola {this.state.mensajeIn}</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    {*/}
      </div>
    );
  }
}

export default MiComponente;

import React, { Component } from 'react';
import './App.css';
import LabelComponent from './components/LabelComponent';
import ButtonComponent from './components/ButtonComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LabelComponent/>
        <ButtonComponent label="Example Button"/>
      </div>
    );
  }
}

export default App;

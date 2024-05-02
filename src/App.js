import React, { Component } from 'react';
import TDT_Form1 from './components/TDT_Form1';
import TDT_Form2 from './components/TDT_Form2';
import TDT_Form3 from './components/TDT_Form3';

class App extends Component {
  render() {
    return (
      <div>
        <h1>event - form - Component control</h1>
        <div>
        <TDT_Form1/>
        </div>
      </div>
    );
  }
}

export default App;
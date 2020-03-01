import React, { Component } from "react";
import "./App.css";
import Darktheme from 'react-dark';

class App extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      <div className="App">
        <Darktheme/>
        <h1>Hello Developer!</h1>
        <h3>This is the test server for React-Dark module</h3>
        <p>Click the switch above to toggle dark mode!!</p>
      </div>
    );
  }
}

export default App;

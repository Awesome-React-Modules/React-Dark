import React, { Component } from "react";
import "./App.css";

class Darktheme extends Component {
  componentDidMount() {
    const presentTheme = localStorage.getItem("theme");
    if (presentTheme) {
      document.documentElement.setAttribute("data-theme", presentTheme);
      if (presentTheme === "dark") {
        document.querySelector('.switch input[type="checkbox"]').checked = true;
      }
    }
  }

  switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute("data-theme", "blue");
      localStorage.setItem("theme", "blue");
    } else {
      document.documentElement.setAttribute("data-theme", "normal");
      localStorage.setItem("theme", "normal");
    }
  }

  onChange(e) {
    this.switchTheme(e);
    console.log('hello')
  }

  render() {
    return (
      <div className="App"  >
        <label className="switch">
          <input type="checkbox" onChange={e => this.onChange(e)} />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}
export default Darktheme;

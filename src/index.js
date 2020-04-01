import React, { Component } from "react";
import "./App.css";

class Darktheme extends React.Component {
  constructor(props) {
      super(props);
      this.state = { value: 'select'};  }
  
  componentDidMount() {
      const presentTheme = localStorage.getItem("theme");
      if (presentTheme) {
        document.documentElement.setAttribute("data-theme", presentTheme);
        }
      else{
        document.documentElement.setAttribute("data-theme", "dark");
      }
      }
      
    switchTheme(e) {
      if (e.target.value === "darkGrey") {
        document.documentElement.setAttribute("data-theme", "darkGrey");
        localStorage.setItem("theme", "darkGrey");
      } 
      else if (e.target.value === "darkBlue") {
        document.documentElement.setAttribute("data-theme", "darkBlue");
        localStorage.setItem("theme", "darkBlue");
      }
       else if (e.target.value === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
       }
       else {
        document.documentElement.setAttribute("data-theme", "normal");
        localStorage.setItem("theme", "normal");
      }
    }
  
    onChange(e) {
      this.setState({
        value: e.target.value
      })
      this.switchTheme(e);
    }
  
        
   render() {
            return (
              <div className="container">
              <label htmlFor="select1" ></label>
              <select value={this.state.value} onChange={e => this.onChange(e)} className="form-control">
                   <option value="select">Change Theme</option>
                    <option value="normal">Normal</option>
                    <option value="dark">Dark</option>
                  <option value="darkGrey">Dark Grey</option>
                    <option value="darkBlue">Dark Blue</option>
              </select>
              </div>
      );
    }
  }
export default Darktheme;

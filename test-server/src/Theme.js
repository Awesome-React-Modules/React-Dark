import React, { Component } from "react";
import "./App.css";

class Theme extends Component {
  componentDidMount() {
    const presentTheme = localStorage.getItem("theme");
    const presentFont = localStorage.getItem('fonts')
    if (presentTheme) {
      document.querySelector('html').style.setProperty('--bg-color',`${presentTheme}`)
    }
    if (presentFont)
      {document.querySelector('html').style.setProperty('--heading-color',`${presentFont}`)}
  }
  submitbackground(e)
  {
    console.log(e.target.value)
    this.onChange(e.target.value)
  }
  submitfont(e){
    localStorage.setItem('fonts',e.target.value)
    document.querySelector('html').style.setProperty('--heading-color',`${e.target.value}`)
  }

  onChange(e) {
    localStorage.setItem('theme',e)
    const val = document.querySelector('html')
    val.style.setProperty('--bg-color',`${e}`)
    console.log(val)
  }

  render() {
    return (
      <div className="App"  >
      <form action="/action_page.php" onChange = {(e) => this.submitbackground(e)} >
      <label for="favcolor">Select your BACKGROUND color:</label>
      <input type="color" id="favcolor" name="favcolor" value="#ff0000"/><br/><br/>
      </form>
      <form action="/action_page.php" onChange = {(e) => this.submitfont(e)}>
      <label for="favcolor">Select your FONT color:</label>
      <input type="color" id="favcolor" name="favcolor" value="#ff0000"/><br/><br/>
      </form>
      <label for = 'background'>Choose background Color </label>
      <select id = 'background'>
      <option onClick = {() => this.onChange('black')} >BLACK</option>
      <option onClick = {() => this.onChange('blue')} >BLUE</option>
      <option onClick = {() => this.onChange('red')} >RED</option>
      <option onClick = {() => this.onChange('yellow')} >YELLOW</option>
      <option onClick = {() => this.onChange('white')} >WHITE</option>
      <option onClick = {() => this.onChange('green')} >GREEN</option>
      <option onClick = {() => this.onChange('orange')} >ORANGE</option>
      </select>
      </div>
    );
  }
}
export default Theme;
// ff8633

import React, { Component } from 'react'
import Navbar from './components/Navbar'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: "light"
    }
  }

  handleDarkMode = () => {
    if (this.state.mode === "light") {
      this.setState({
        mode: "dark"
      });
      document.body.style.backgroundColor = "#71797E"

    } else {
      this.setState({
        mode: "light"
      });
      document.body.style.backgroundColor = "#ffffff"
    }
  }

  render() {
    return (
      <>
        <Navbar
          heading={"News Daily"}
          mode={this.state.mode}
          handleDarkMode={this.handleDarkMode} />
      </>
    )
  }
}

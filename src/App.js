import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';

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
    const apiKey = process.env.REACT_APP_API_KEY;
    return (
      <>
        {/* navbar component */}
        <Navbar
          heading={"News Daily"}
          mode={this.state.mode}
          handleDarkMode={this.handleDarkMode} />

        {/* news components */}
        <News
          mode={this.state.mode}
          apiKey={apiKey}
          pageSize={5}
        />
      </>
    )
  }
}

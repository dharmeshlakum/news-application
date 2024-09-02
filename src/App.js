import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { Routes, Route } from "react-router-dom"

export default class App extends Component {
  pageNumber = 15;
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
        <Routes>

          {/* news components */}
          <Route path='/' element={
            <News
              key={"general"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"general"} />
          } />
          <Route path='/business' element={
            <News
              key={"business"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"business"} />
          } />
          <Route path='/entertainment' element={
            <News
              key={"entertainment"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"entertainment"} />
          } />
          <Route path='/general' element={
            <News
              key={"general"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"general"} />
          } />
          <Route path='/health' element={
            <News
              key={"health"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"health"} />
          } />
          <Route path='/science' element={
            <News
              key={"science"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"science"} />
          } />
          <Route path='/sports' element={
            <News
              key={"sports"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"sports"} />
          } />
          <Route path='/technology' element={
            <News
              key={"technology"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"technology"} />
          } />
        </Routes>
      </>
    )
  }
}

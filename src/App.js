import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  pageNumber = 15;
  constructor() {
    super();
    this.state = {
      mode: "light",
      progress: 0
    }
  }

  progressUpdate = (progress) => {
    this.setState({
      progress: progress
    });
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
        <LoadingBar
          color='#f10946'
          height={4}
          progress={this.state.progress}
        />
        <Routes>

          {/* news components */}
          <Route path='/' element={
            <News 
            setProgress={this.progressUpdate}
              key={"general"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"general"} />
          } />
          <Route path='/business' element={
            <News 
            setProgress={this.progressUpdate}
              key={"business"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"business"} />
          } />
          <Route path='/entertainment' element={
            <News 
            setProgress={this.progressUpdate}
              key={"entertainment"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"entertainment"} />
          } />
          <Route path='/general' element={
            <News 
            setProgress={this.progressUpdate}
              key={"general"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"general"} />
          } />
          <Route path='/health' element={
            <News 
            setProgress={this.progressUpdate}
              key={"health"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"health"} />
          } />
          <Route path='/science' element={
            <News 
            setProgress={this.progressUpdate}
              key={"science"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"science"} />
          } />
          <Route path='/sports' element={
            <News 
            setProgress={this.progressUpdate}
              key={"sports"}
              mode={this.state.mode}
              apiKey={apiKey}
              pageSize={this.pageNumber}
              country={"in"}
              category={"sports"} />
          } />
          <Route path='/technology' element={
            <News 
            setProgress={this.progressUpdate}
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

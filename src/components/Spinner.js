import React, { Component } from 'react'
import spinerImage from "../assets/spiner.gif"

export default class Spinner extends Component {
  render() {
    return (
      <div className='container text-center my-4'>
        <img src={spinerImage} alt="" style={{height: "30px", width: "30px"}} />
      </div>
    )
  }
}

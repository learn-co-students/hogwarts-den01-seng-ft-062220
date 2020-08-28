import React, { Component } from 'react'
import HogTileList from '../components/HogTilesList'

export default class HogTileContainer extends Component {

  constructor(){
    super();
    this.state = {
      hogs: []
    }
  }
  render(){
    const { hogs } = this.props;
    console.log(hogs);
    return(
      <div>
        {HogTileList(hogs)}
      </div>
    )
  }
}
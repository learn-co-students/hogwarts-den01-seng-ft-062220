import React from 'react'
import HogDetails from './HogDetails'



export default class HogTile extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  getHogPicture = (name) => {
    const nameToSearch = name.split(' ').join('_').toLowerCase();
    let picture = require(`../hog-imgs/${nameToSearch}.jpg`);
    return picture
  }

  render(){
    const { hog } = this.props;
    return (
      <div className='ui card eight wide column pigTile'>
        <img src={this.getHogPicture(hog.name)} alt='hog' />
        <div className='content'>
          <h3>{hog.name}</h3>
          <div>Specialty: {hog.specialty}</div>
        </div>
        <div className='extraContent'>
          {this.state.clicked ? <HogDetails hog={hog} /> : null}
          <button className='ui button' onClick={this.handleClick}>{this.state.clicked ? "Less Info" : "More Info"}</button>
        </div>
      </div>
    )
  }
  
}
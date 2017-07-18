// Code DigitalClicker Component Here

import React from 'react'

class DigitalClicker extends React.Component {

  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    let count = this.state.timesClicked
    count++
    this.setState({
      timesClicked: count
    })
  }

  render(){
    return(
      <button label={this.state.timesClicked} onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker

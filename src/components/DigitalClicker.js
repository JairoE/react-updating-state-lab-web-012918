// Code DigitalClicker Component Here
import React from 'react'

class DigitalClicker extends React.Component{
  constructor(){
    super();
    this.state = {
      timesClicked: 0
    }
  }

  updateClick = ()=>{
    let update = this.state.timesClicked + 1
    this.setState({
      timesClicked: update
    })
  }

  render(){
    return (
      <div>

      <button onClick={this.updateClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;

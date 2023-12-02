import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
        <div id="leftbtn" className="button" onClick={()=> this.props.mode? this.props.handleClick('left'):this.props.handleClick('right')}>
                        {this.props.mode=='left'?<ArrowBackIosIcon/>:<ArrowForwardIosIcon/>}
        </div>
    )
  }
}

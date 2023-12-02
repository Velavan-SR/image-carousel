import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui

import  Button  from "./Button";

// implement the class below
class Carousel extends Component {

    constructor (){
        super()
        this.state = {
            count : 0
        }
    }

    handleClick=(operation)=>{

        if (operation==='left'){
            if(this.state.count!==0){
                this.setState({count:this.state.count-1})
            }else{
                this.setState({count:images.length-1})
            }
        }else if(operation==='right'){

            if(this.state.count!=images.length-1){
                this.setState({count:this.state.count+1})
            }else {
                this.setState({count:0})
            }

        }

    }
  
    render(){
        return(


            <div id="carousel">

                <div id="inner-carousel" style={{backgroundImage:`url(${images[this.state.count].img})`}}>

                    <Button mode='left' handleClick = {this.handleClick}/>

                    <div id="textbox">
                        <h1>{images[this.state.count].title}</h1>
                        <p>{images[this.state.count].subtitle}</p>
                    </div>

                    <Button mode='right' handleClick = {this.handleClick}/>

                </div>

            </div>


        )
    }

}

export default Carousel;
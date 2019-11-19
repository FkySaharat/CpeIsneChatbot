import React, { Component, Fragment } from 'react';
import {Chatbot,Navbar,Footer} from './components'; 

export default class extends Component{
  constructor(){
    super();
    this.state={
      width: window.innerWidth,
    }
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }
  
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }
  
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  
  render(){
    const isMobile =this.state.width <= 500;
    console.log(this.state.width);


    //if(this.state.width>500){

      return(
        <Fragment position="realtive">
          <Navbar/>  
          <Chatbot/>
          <Footer/>
        </Fragment>
      );
    //}
    //else{

    //}

  }
}

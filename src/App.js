import React, { Component, Fragment } from 'react';
import {Chatbot,Navbar,Footer} from './components'; 


export default class extends Component{
  render(){
    return(
      <Fragment>
        <Navbar/>
        <Chatbot/>
        <Footer/>
      </Fragment>
    );
  }
}

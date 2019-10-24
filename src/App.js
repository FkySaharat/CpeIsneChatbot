import React, { Component, Fragment } from 'react';
import {Chatbot,Navbar} from './components'; 
export default class extends Component{
  render(){
    return(
      <Fragment>
        <Navbar/>
        <Chatbot/>
      </Fragment>
    );
  }
}

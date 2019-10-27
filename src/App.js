import React, { Component, Fragment } from 'react';
import {Chatbot,Navbar} from './components'; 
import Footer from './components/Footer';

export default class extends Component{
  render(){
    return(
      <Fragment>
        <Navbar/>
        
        <Footer/>
      </Fragment>
    );
  }
}


import React, {Component } from "react";
import Listmessages from './messages';
import Navbar from "./Navbar";
import Api from '../api.json';

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




class Chatbot extends Component {
    state={
      count:0,
      messagebuffer:[{mode:'',time:0,type:'message',payload:''}],
     
    };

    constructor() {
        super();
       
        this.handleaddmessage=this.handleaddmessage.bind(this);  
        this.handlemessage=this.handlemessage.bind(this);     
    }

    //add new message to buffer
    handleaddmessage(event){
     this.state.messagebuffer.push(event[0]);
     this.setState({some:event[0],messagebuffer:this.state.messagebuffer});
    }

    //communicate to chatbot
    handlemessage(para){ 
      this.refs.messages.value=' ';  
      if(para!==" "){
        var attr=[{mode:'client',time:0,type:'message',payload:para}];
        this.handleaddmessage(attr);
        this.scrollToWithContainer()
        fetch(Api.Url+para+'&sessionId=2',{
              method:'GET',
              headers: new Headers({
                      'Content-Type': 'application/json',
                      'Authorization': Api.Authorization
              })  
        }).then((res) => {
              return res.json(); 
        }).then((data)=>{
            var m =data.result.fulfillment.messages;
            for(var i=0;i<m.length;i++){
              if(m[i].speech){
                attr=[{mode:'bot',time:0,type:'message',payload:m[i].speech}];
                this.handleaddmessage(attr);
              }
            }
            for(var i=0;i<m.length;i++){
              if(m[i].imageUrl){
                attr=[{mode:'bot',time:0,type:'image',payload:m[i].imageUrl}];
                this.handleaddmessage(attr);
              }
            }
              this.scrollToWithContainer()            
        }).catch((error) => console.log(error))
      }
    }
  
    //ScrollTothelastmessage
    scrollToWithContainer() {

      let goToContainer = new Promise((resolve, reject) => {
  
        Events.scrollEvent.register('end', () => {
          resolve();
          Events.scrollEvent.remove('end');
        });
  
        scroller.scrollTo('scroll-container', {
          duration: 8,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
  
      });
  
      goToContainer.then(() =>
        scroller.scrollTo('test1', {
          duration: 100,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
        }));
    }

    //Enter to send messages
    handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        this.handlemessage(this.refs.messages.value);
      }
    }
    
    render() {
    
      
      
      
      return (
        <div> 
        <div>
            <Navbar />
            <div>
              
                {this.state.messagebuffer.map(m=>{
                    if(m!==this.state.messagebuffer[this.state.messagebuffer.length-1]){
                      return <Listmessages value={m} name="test1"  />
                    }
                    else{
                      return <Listmessages value={m} />
                    }
                })}
            </div>
            
            <div>
              <input  type="text"  placeholder="Type here" ref="messages" onKeyPress={this.handleKeyPress}/>
              <button   className="test1" to="test1" onClick={()=>this.handlemessage(this.refs.messages.value)} />  
            </div>  
                       
        </div>
        </div>
      );
    }
 

}

export default Chatbot;
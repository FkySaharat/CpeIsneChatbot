
import React, {Component } from "react";
import Listmessages from './messages';
import Api from '../api.json';
//import { storiesOf } from "@storybook/react";
//import { Search } from "grommet-icons";
import { Box, Grommet, TextInput, Button,Image } from "grommet";
//import { grommet } from "grommet/themes";
//import { deepMerge } from "grommet/utils";
import { Send } from "grommet-icons";
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Navbar from "./Navbar";
import bg from "../bg.png";


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
        })
        .then((res) => {
            return res.json(); 
        }).then((data)=>{

            attr=[{mode:'bot',time:0,type:'message',payload:data.result.fulfillment.messages[0].speech}];
            this.handleaddmessage(attr);
            
            var m =data.result.fulfillment.messages;
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
        this.refs.messages.value=' ';
      }
    }
    
    render() {
    
      
      
      console.log("lenght",this.state.messagebuffer[this.state.messagebuffer.length-1]);
      return (
        <Grommet full={true}  > 
        <Box align="center"  background={{"color":"#ffffff" , "image":"url(https://firebasestorage.googleapis.com/v0/b/cpe-isne-chatbot-psheil.appspot.com/o/bg.png?alt=media&token=4ca292e8-028d-4bae-a6ba-b2d7fb3aadd6)"}} height="full"    >

            <Navbar />
            
            
            <Box  background="linear-gradient(102.77deg, #EEF5DB -9.18%, #f8f8f8 209.09%)"  
                overflow={{"vertical": "scroll", "horizontal": "hidden"}} 
                height="80%" width="medium"   
                elevation="medium"
                pad={{"bottom":"small"}}
                id="scroll-container">
              
            {this.state.messagebuffer.map(m=>{
                if(m!==this.state.messagebuffer[this.state.messagebuffer.length-1]){
                  return <Listmessages value={m} name="test1"  />
                }
                else{
                  return <Listmessages value={m} />
                }
            })}
            
            </Box>
            
            <Box margin={{"top":"xsmall"}} width="medium" align="center" direction="row" justify="between">
              <TextInput  type="text"  placeholder="Type here" ref="messages" onKeyPress={this.handleKeyPress}/>
              <Button icon={<Send />} margin="xsmall" pad="small" primary color="linear-gradient(102.77deg, #F1A66A -9.18%, #F7EE7F 209.09%)"  className="test1" to="test1" onClick={()=>this.handlemessage(this.refs.messages.value)} />  
            </Box>           
            
        </Box>
       
        </Grommet>
      );
    }
 

}

export default Chatbot;
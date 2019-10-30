
import React, {Component } from "react";
import Listmessages from './messages';
import Api from '../api.json';
//import bg from '../bgChatbot.png';
import bgh from '../Halloween.jpg';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import {Button,Grid, Box,InputBase} from "@material-ui/core";
import { styled } from '@material-ui/core/styles';


const ShowMessagesbox = styled(Grid)({ 
  background: '#eeeeee',
  color: 'white',
  height: '75vh',
  width:'375px',
  maxHeight:'500px',
  padding: '15px 20px',
});
const InputMessagesbox = styled(Box)({ 
  minWidth:'360px',
  marginBottom:"20px",
  borderBottomLeftRadius:"10px",
  borderBottomRightRadius:"10px",
  background: '#eeeeee',
  
});

const CssTextField = styled(InputBase)({
 
    '& label.Mui-focused': {
      color: 'blue',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'blue',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'red',
      },
      '&:hover fieldset': {
        borderColor: 'blue',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'blue',
      },
    },
    borderRadius: 10,
    position: 'relative',
    backgroundColor: '#e0e0e0',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
  
});


class Chatbot extends Component {
    state={
      count:0,
      messagebuffer:[{mode:'',time:0,type:'message',payload:"Hi,I'm CPEchatbot.How can I help you?"}],
      InputMessage:'',
    
    };

    constructor() {
        super();
       
        this.handleAddmessage=this.handleAddmessage.bind(this);  
        this.handlemessage=this.handlemessage.bind(this);     
    }

   
    handleChange = event => {
      const {name, value} = event.currentTarget;
      this.setState({[name]: value});
    };

    //add new message to buffer
    handleAddmessage(event){
     this.state.messagebuffer.push(event[0]);
     this.setState({some:event[0],messagebuffer:this.state.messagebuffer});
    }

    //communicate to chatbot
    handlemessage(para){ 
      this.setState({InputMessage:''});
      var check=false;
      for(let i=0;i<para.length;i++){
        if(para[i].match(/[a-zA-Z0-9]/)){
          check=true;
        }
      }
      
      
      if(check){
        var attr=[]
        if(para.length>150){
          attr=[{mode:'bot',time:0,type:'overmessage',payload:'error'}];
          this.handleAddmessage(attr);
          this.scrollToWithContainer()
        }
        else{
          attr=[{mode:'client',time:0,type:'message',payload:para}];
          this.handleAddmessage(attr);
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
              for(let i=0;i<m.length;i++){
                if(m[i].speech){
                  attr=[{mode:'bot',time:0,type:'message',payload:m[i].speech}];
                  this.handleAddmessage(attr);
                }
              }
              for(let i=0;i<m.length;i++){
                if(m[i].imageUrl){
                  attr=[{mode:'bot',time:0,type:'image',payload:m[i].imageUrl}];
                  this.handleAddmessage(attr);
                }
              }
            
                this.scrollToWithContainer()            
          }).catch((error) => {
                attr=[{mode:'bot',time:0,type:'errormessage',payload:"System Error Please Try Again"}];
                this.handleAddmessage(attr);
          })
        }
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
        scroller.scrollTo('lastmessage', {
          duration: 100,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
        }));
    }

    //Enter to send messages
    handleKeyPress = (event) => {
      if( event.key ==='Enter' && !event.shiftKey){
        this.handlemessage(this.state.InputMessage);
      }

    }
  
    
    render() {
      /* const Messages=this.state.InputMessage; */
      
      return (
          
        <Grid  container style={{position:"relative",height:'100vh',width:'100%',minWidth:"375px",backgroundImage:`url(${bgh})`,backgroundSize:"cover",backgroundPosition:"center center"}} direction="column"  alignItems="center">

            <ShowMessagesbox item id="scroll-container" style={{overflowY:"scroll"}}>
              
                {this.state.messagebuffer.map(m=>{
                  if(m!==this.state.messagebuffer[this.state.messagebuffer.length-1]){

                      return <div><Listmessages value={m}  /></div>
                    }
                    else{
                      console.log(m);
                      return <div name="lastmessage"><Listmessages value={m} /></div>
                    }
                  })}
            </ShowMessagesbox>
            
            <InputMessagesbox  p={1} height={55}  display="flex" justifyContent="center"> 
              <Box  component="div" width="100%">
                <CssTextField  id="standard-multiline-static" multiline rows="2"   name="InputMessage"  value={this.state.InputMessage}   variant="outlined" placeholder="Type here"  onKeyDown={this.handleKeyPress}    onChange={this.handleChange} style={{width:"100%"}} /> 
              </Box>
              
              <Box  component="div" style={{marginLeft:'2px'}} >
                <Button variant="contained" color="primary"   onClick={()=>this.handlemessage(this.state.InputMessage)} style={{width:"50px",height:"100%",margin:"1px"}}>
                     send
                </Button> 
              </Box>
            </InputMessagesbox>  
           
            
        </Grid>
       
        
      );
    }

}

export default Chatbot;
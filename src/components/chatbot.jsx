
import React, {Component } from "react";
import Listmessages from './messages';
import Api from '../api.json';
import bg from '../bgChatbot.png';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import {TextField, Button,Grid, Box} from "@material-ui/core";
import { styled } from '@material-ui/core/styles';


const ShowMessagesbox = styled(Grid)({ 
  background: '#eeeeee',
  border: 0,
  borderRadius: 5,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: '75vh',
  width:'375px',
  maxHeight:'500px',
  padding: '15px 20px',
  marginTop:'20px',
});
const InputMessagesbox = styled(Box)({ 
  minWidth:'375px',
  marginBottom:"20px"
});

const CssTextField = styled(TextField)({
 
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
    
  
});


class Chatbot extends Component {
    state={
      count:0,
      messagebuffer:[{mode:'',time:0,type:'message',payload:''}],
      InputMessage:''
    };

    constructor() {
        super();
       
        this.handleaddmessage=this.handleaddmessage.bind(this);  
        this.handlemessage=this.handlemessage.bind(this);     
    }

    handleChange = event => {
      const {name, value} = event.currentTarget;
      this.setState({[name]: value});
    };

    //add new message to buffer
    handleaddmessage(event){
     this.state.messagebuffer.push(event[0]);
     this.setState({some:event[0],messagebuffer:this.state.messagebuffer});
    }

    //communicate to chatbot
    handlemessage(para){ 
      if(para!==" "&&para!==""){
        this.setState({InputMessage: ''});
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
            for(let i=0;i<m.length;i++){
              if(m[i].speech){
                attr=[{mode:'bot',time:0,type:'message',payload:m[i].speech}];
                this.handleaddmessage(attr);
              }
            }
            for(let i=0;i<m.length;i++){
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
        scroller.scrollTo('lastmessage', {
          duration: 100,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
        }));
    }

    //Enter to send messages
    handleKeyPress = (event) => {
      if(event.key === 'Enter'){
        this.handlemessage(this.state.InputMessage);
      } 
    }
    
    
    render() {
      const Messages=this.state.InputMessage;
      return (
          

        <Grid  container style={{position:"relative",height:'100%',width:'100%',minWidth:"375px",backgroundImage:`url(${bg})`,backgroundSize:"cover",backgroundPosition:"center center"}} direction="column"  alignItems="center">

            <ShowMessagesbox item id="scroll-container" style={{overflowY:"scroll"}}>
              
                {this.state.messagebuffer.map(m=>{
                  if(m!==this.state.messagebuffer[this.state.messagebuffer.length-1]){
                    
                      return <div><Listmessages value={m}  /></div>
                    }
                    else{
        
                      return <div name="lastmessage"><Listmessages value={m} /></div>
                    }
                  })}
            </ShowMessagesbox>
            
            <InputMessagesbox  mt={1} height={55}  display="flex" justifyContent="center"> 
              <Box  component="div" width="100%">
                <CssTextField  label="Type Message here" name="InputMessage" value={Messages}  type="text"  variant="outlined" placeholder="Type here"  onKeyPress={this.handleKeyPress} onChange={this.handleChange} style={{width:"100%"}}/> 
              </Box>
              
              <Box  component="div" style={{marginLeft:'2px'}} >
                <Button  variant="outlined" color="secondary"  onClick={()=>this.handlemessage(Messages)} style={{width:"50px",height:"100%",margin:"1px"}}>
                    Send  
                </Button> 
              </Box>
            </InputMessagesbox>  
            
        </Grid>
       
        
      );
    }

}

export default Chatbot;
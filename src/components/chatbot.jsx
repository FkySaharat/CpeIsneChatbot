
import React, {Component } from "react";
import Listmessages from './messages';
import Api from '../api.json';
//import { storiesOf } from "@storybook/react";
import ScrollToBottom from 'react-scroll-to-bottom';
//import { Search } from "grommet-icons";
import { Box, Image, Grommet, Text, TextInput, Button ,Grid,InfiniteScroll} from "grommet";
//import { grommet } from "grommet/themes";
//import { deepMerge } from "grommet/utils";
import { css } from 'glamor';
import { Close, Send, User } from "grommet-icons";

class Chatbot extends Component {
    state={
      count:0,
      messagebuffer:[{mode:null,time:null,type:null,payload:null}],
    };

    constructor() {
        super();

        this.handleaddmessage=this.handleaddmessage.bind(this);  
        this.handlemessage=this.handlemessage.bind(this);     
    }

    

    handleaddmessage(event){
     this.state.messagebuffer.push(event[0]);
     this.setState({some:event[0],messagebuffer:this.state.messagebuffer});
    }

    handlemessage(para){
      var attr=[{mode:'client',time:0,type:'message',payload:para}];
      this.handleaddmessage(attr);
    
      fetch(Api.Url+para+'&sessionId=1',{
            method:'GET',
            headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': Api.Authorization
            })  
        })
        .then((res) => {
            return res.json(); 
        }).then((data)=>{
            attr=[{mode:'bot',time:0,type:'message',payload:data.result.fulfillment.speech}];
            this.handleaddmessage(attr);
            console.log(attr);
            var m =data.result.fulfillment.messages;
            for(var i=0;i<m.length;i++){
              if(m[i].imageUrl){
                attr=[{mode:'bot',time:0,type:'image',payload:m[i].imageUrl}];
                this.handleaddmessage(attr);
              }
            }
            //if(data.result.fulfillment.messages["imageUrl"]){
            
            //  this.handleaddmessage(data.result.fulfillment.messages("imageUrl"));
            //}
            console.log(data.result.fulfillment.messages[0].speech);
        }).catch((error) => console.log(error))
    }
  
    
    

    render() {
      const ROOT_CSS = css({
        height: 600,
        width:  360
      });
      
      return (
        <Grommet full={true}  > 
        <Box align="center"  background="dark-1"  height="full">
            <Box align="center" background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)" height="80%" width="medium" overflow="auto" round={{ "corner": "bottom"}}>
              <ScrollToBottom className={ROOT_CSS}>
              {this.state.messagebuffer.map(m=><Listmessages value={m} />)}
              </ScrollToBottom>
            </Box>
              
            <Box margin={{"top":"xsmall"}} width="medium" align="center" direction="row" justify="between">
              <TextInput  type="text" ref="messages" />
              <Button icon={<Send />} margin="xsmall" pad="small" primary  onClick={()=>this.handlemessage(this.refs.messages.value)} />  
            </Box> 
              
           
        </Box>
            
            
         
        </Grommet>
      );
    }
 

}

export default Chatbot;
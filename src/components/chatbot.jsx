import React, { Component } from 'react';
import Listmessages from './messages';
import Api from '../api.json';

class Chatbot extends Component {
    state={
      count:0,
      messagebuffer:[{mode:null,time:null,type:null}],
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
      
      return (
        <div> 
              
           {this.state.messagebuffer.map(m=><Listmessages  value={m} />)}
            
            <div>
              <input type="text" ref="messages" />
              <input type="submit" value="send" onClick={()=>this.handlemessage(this.refs.messages.value)} />
            </div>
         
         
        </div>
      );
    }
 

}

export default Chatbot;
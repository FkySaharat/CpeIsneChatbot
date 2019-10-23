import React, { Component } from 'react';


function Renderimage(params) { 
    if(params.mode==="client"){
        return(<div   ><img src={params.payload} style={{ height:150}}/></div>); 
    }
    else{
        return(<div ><img src={params.payload} style={{ height:150}}/></div>); 
    }
         
}

function Rendermessage(params) {
   
    if(params.mode==="client") {
        return(<div>{params.payload}</div>);
    }
    else{
        return(<div>{params.payload}</div>);    

    }
}

class Messagemode extends Component {
    state = {
       
    }
    
    render() { 
        
        var image =true;
        if(this.props.value.type!=='image'){
            image=false;
        }
        if(this.props.value.mode==='client'){
            return(
            <div>
                <p>Me</p>
                {image ? Renderimage(this.props.value):Rendermessage(this.props.value)}
            </div>);
        }
        else{
            return(
            <div> 
                <p>cpebot</p>
                {image ? Renderimage(this.props.value):Rendermessage(this.props.value)}
            </div>);
        }
    }
}
 
class ListMessages extends Component {
    state = {
        value:this.props.value
      }
    render() { 
        
        const content =this.state.value;
       
        if(content.payload!==""){
            
            return( <div><Messagemode value={content} /></div>  ); 
        }
        else{
            return(<div></div>);
        }
      
        

    }
}
 
export default ListMessages;
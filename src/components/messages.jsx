import React, { Component } from 'react';
import { Box, Image, Text,Button ,Grid} from "grommet";

function Renderimage(params) { 
        return(<Image src={params} style={{ height:150}}/>); 
         
}

function Rendermessage(params) {
    return(<Text>{params}</Text>);    
}

class Messagemode extends Component {
    state = {
       
    }
    
    render() { 
        console.log(this);
       

        var image =true;
        if(this.props.value.type!=='image'){
            image=false;
        }
        if(this.props.value.mode==='client'){
            return(
            <Box align="end" >
                <Text size="xsmall" >{this.props.value.mode}</Text>
                {image ? Renderimage(this.props.value.payload):Rendermessage(this.props.value.payload)}
            </Box>);
        }
        else{
            return(
            <Box  align="start" >
                <Text size="xsmall">{this.props.value.mode}</Text>
                {image ? Renderimage(this.props.value.payload):Rendermessage(this.props.value.payload)}
            </Box>);
        }
    }
}
 
class ListMessages extends Component {
    state = {
        value:this.props.value
      }
    render() { 
        
        const content =this.state.value;
        
        
        
        return(
           
            <div><Messagemode value={content} /></div>
          
        ); 
      
        

    }
}
 
export default ListMessages;
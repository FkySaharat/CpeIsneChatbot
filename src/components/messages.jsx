import React, { Component } from 'react';
import { Box, Image, Grommet, Text, TextInput, Button ,Grid,InfiniteScroll} from "grommet";

function Renderimage(params) { 
        return(<img src={params} style={{ height:150}}/>);    
}

function Rendermessage(params) {
    return(<Box background="accent-1" round="xsmall" pad="xxsmall"><Text>{params}</Text></Box>);    
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
            <Box align="end">
                <Text size="xsmall" >{this.props.value.mode}</Text>
                {image ? Renderimage(this.props.value.payload):Rendermessage(this.props.value.payload)}
            </Box>);
        }
        else{
            return(
            <Box align="start">
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
            <Messagemode value={content}/>
        ); 
      
        

    }
}
 
export default ListMessages;
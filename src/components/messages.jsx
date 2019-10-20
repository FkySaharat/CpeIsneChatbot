import React, { Component } from 'react';
import { Box, Image, Text,Button ,Grid} from "grommet";

function Renderimage(params) { 
    if(params.mode==="client"){
        return(<Box margin={{right:"small"}}><Image src={params.payload} style={{ height:150}}/></Box>); 
    }
    else{
        return(<Box margin={{left:"xsmall"}}><Image src={params.payload} style={{ height:150}}/></Box>); 
    }
         
}

function Rendermessage(params) {
   
    if(params.mode==="client") {
        return(<Box pad="xsmall" width={{max:"300px"}} align="stretch" animation={{"type":"slideLeft" , "duration": 1000, "delay":100}} margin={{right:"small"}} background="linear-gradient(102.77deg, #F36F66 -9.18%, #F7EE7F 209.09%)"><Text>{params.payload}</Text></Box>);
    }
    else{
        return(<Box pad="xsmall" margin={{left:"xsmall"}} background="linear-gradient(102.77deg, #F36F66 -9.18%, #F7EE7F 209.09%)"><Text>{params.payload}</Text></Box>);    

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
            <Box align="end"  >
                <Text size="xsmall" >Me</Text>
                {image ? Renderimage(this.props.value):Rendermessage(this.props.value)}
            </Box>);
        }
        else{
            return(
            <Box  align="start" >
                <Text size="xsmall">CPE ISNE Bot</Text>
                {image ? Renderimage(this.props.value):Rendermessage(this.props.value)}
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
       
        if(content.payload!==""){
            
            return( <div><Messagemode value={content} /></div>  ); 
        }
        else{
            return(<div></div>);
        }
      
        

    }
}
 
export default ListMessages;
import React, { Component } from 'react';
import {Typography,Box,Grid} from '@material-ui/core';

import { styled } from '@material-ui/core/styles';


const Messagesbox = styled(Grid)({ 
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 5,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  padding:'2px 5px'
});

  
function Renderimage(params) { 

        return(<Box p={1} component="div"  >
                    <img src={params.payload} alt="" style={{ height:150}}/>
               </Box>); 
       
}

function Rendermessage(params) {

        return( <Box component="div">
                    <Messagesbox>
                        <Typography component="div" style={{wordBreak:"break-word" }}>
                        {params.payload}
                        </Typography>
                    </Messagesbox>
                    
                </Box>
        );
}

class Messagemode extends Component {
    
    render() { 
        
        var image =true;
        if(this.props.value.type!=='image'){
            image=false;
        }
        if(this.props.value.mode==='client'){
            return(
            <div>
                <Typography component="div"><Box textAlign="right" fontWeight="fontWeightLight" color="#9e9e9e">Me</Box></Typography>
                <Box  display="flex" justifyContent="flex-end"  >     
                        {image ? Renderimage(this.props.value):Rendermessage(this.props.value)}   
                </Box>
               
            </div>);
        }
        else{
            return(
            <div > 
                <Typography component="div"><Box textAlign="left" fontWeight="fontWeightLight" color="#9e9e9e">Bot</Box></Typography>
                <Box  display="flex" justifyContent="flex-start"  >                    
                        {image ? Renderimage(this.props.value):Rendermessage(this.props.value)}                   
                </Box>
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
       
        if(content.payload!=="" && content.payload!==" "){
            return(<Messagemode value={content} />); 
        }
        else{
        
            return(<div></div>);
        }
    }
}
 
export default ListMessages;
import React, { Component } from 'react';
import {Typography,Box,Grid,Card, Button,ButtonBase} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import { styled } from '@material-ui/core/styles';


const Messagesbox = styled(Grid)({ 
  //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 5,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',

  padding:'2px 5px',

});


 

  
class Renderimage extends Component { 
    
    
      constructor(props){
          super(props);
        this.state = {
        params:this.props.value,
        showComponent:false
      }
          this.onButtonClick=this.onButtonClick.bind(this);
      }
        
     onButtonClick() {
         if(this.state.showComponent===true){
                this.setState({
                     showComponent: false,
                });
         }else{
            this.setState({
                showComponent: true,
           });
         }
       
      } 
    render(){
        return(<Box p={1} component="div">
                    
                    <Card >
                        <CardMedia component="img" alt=""  image={this.state.params} style={{height:"210px"}}/>
                    
                        <CardActions >
                            <Button size="small" color="primary" onClick={this.onButtonClick}>Expand</Button>
                        </CardActions>
                    </Card>
                    {this.state.showComponent ?
                        <Box width={1} style={{position:"absolute",left:"0",right:"0",top:"0",bottom:"0"}} zIndex="tooltip">
                            
                       <ButtonBase  onClick={this.onButtonClick}>
                          <span><CardMedia component="img" alt=""  image={this.state.params} /></span>  
                       </ButtonBase>

                        </Box> : null
                    }
               </Box>); 
        }
}

function Rendermessage(params) {
        if(params.type==='overmessage'){
            return(
                <Box component="div">
                    <Box color="error.main" border={1} borderColor="error.main"
                    borderRadius={20} p="2px 8px" >
                        <Typography component="div" style={{wordBreak:"break-word" }}>

                            Please!,do not type more than 150 characters

                        </Typography>
                    </Box>
                </Box>
            );
        }else if(params.type==='errormessage'){
            return(
                <Box component="div">
                    <Box color="error.main" border={1} borderColor="error.main"
                    borderRadius={20} p="2px 8px" >
                        <Typography component="div" style={{wordBreak:"break-word" }}>
                        {params.payload}    
                        </Typography>
                    </Box>
                </Box>
            );

        }
        else if(params.type==='linkmessage'){
            return(
                
                <Box component="div">
                    <Box color="error.main" border={1} borderColor="error.main"
                    borderRadius={20} p="2px 8px" >
                        <Typography component="div" style={{wordBreak:"break-word" }}>
                        'Info of'{params.payload}    
                        </Typography>
                    </Box>
                    <Box color="error.main" border={1} borderColor="error.main"
                    borderRadius={20} p="2px 8px" >
                        <Typography component="div" style={{wordBreak:"break-word" }}>
                        'Go to other room'   
                        </Typography>
                    </Box>
                </Box>
              
            );

        }
        if(params.mode==="client"){
            return(


               <Box component="div">
                <Messagesbox style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
                    <Typography component="div" style={{wordBreak:"break-word" }}>
                        {params.payload}
                    </Typography>
                </Messagesbox>
            </Box> 
            );
            
        }
        if(params.mode==='bot'){
            return(

                <Box component="div">
                    <Messagesbox style={{background: 'linear-gradient(45deg, #605C4E 30%, #363020 90%)'}}>
                        <Typography component="div" style={{wordBreak:"break-word" }}>
                            {params.payload}
                        </Typography>

                    </Messagesbox>
                </Box>
            );
        }
        else{
            return(

                <Box component="div">
                    <Messagesbox style={{background: 'linear-gradient(45deg, #605C4E 30%, #363020 90%)'}}>
                        <Typography component="div" style={{wordBreak:"break-word" }}>
                            {params.payload}
                        </Typography>

                    </Messagesbox>
                </Box>
            );
        }
        
       
}

class Messagemode extends Component {
    state={
        info:this.props.value,
    }
    render() { 
        
        var image = true;
        if(this.state.info.type!=='image'){
            image=false;
        }
        if(this.props.value.mode==='client'){
            return(
            <div>
                <Typography component="div"><Box textAlign="right" fontWeight="fontWeightLight" color="#9e9e9e">Me</Box></Typography>
                <Box display="flex" justifyContent="flex-end"  >     
                        {image ? <Renderimage value={this.props.value.payload}/>:Rendermessage(this.props.value)}   
                </Box>
               
            </div>);
        }
        else{
            return(
            <div > 
                <Typography component="div"><Box textAlign="left" fontWeight="fontWeightLight" color="#9e9e9e">Bot</Box></Typography>
                <Box  display="flex" justifyContent="flex-start"  >                    
                        {image ? <Renderimage value={this.props.value.payload}/>:Rendermessage(this.props.value)}                  
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
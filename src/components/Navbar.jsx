import React, { Component } from 'react';

import {Box,Image, Grommet,Text} from "grommet";
import { grommet } from "grommet/themes";
import chatlogo from "../chatlogo.png"



class Navbar extends Component {
    state = { 
        name:this.props.value
     }
    render() { 
        return ( 
            <Grommet theme={grommet}>
            <Box 
                gridArea="header" 
                width ="xxlarge"
                elevation="large"
                direction="row"                
                pad={{ horizontal: "medium", vertical: "small" }}
                background="#E2F9B8"
                
            >
                <img src={chatlogo} width="400" hight="50" />
                 {/* <Text size ="large" color="white" align ="start" >CPE ISNE Chatbot </Text>  */}
                    
            </Box>
           </Grommet>
            
        );
    }
}
 
export default Navbar;
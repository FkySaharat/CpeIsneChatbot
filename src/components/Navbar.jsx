import React, { Component } from 'react';
import chatlogo from "../chatlogo.png"



class Navbar extends Component {
    state = { 
        name:this.props.value
     }
    render() { 
        return ( 
           
            <div>
                <img src={chatlogo} width="400" hight="50" /> 
            </div>
       
        );
    }
}
 
export default Navbar;
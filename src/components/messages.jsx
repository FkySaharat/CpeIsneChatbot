import React, { Component } from 'react';


function Renderimage(params) { 
        return(<img src={params} style={{ height:150}}/>);    
}

function Rendermessage(params) {
    return(<span>{params}</span>);    
}
class ListMessages extends Component {
    state = {
        value:this.props.value
      }
    render() { 
        
        const content =this.state.value;
        console.log(content);
        var image =true;
        if(content.type!=='image'){
            image=false;
        }
        if(content.mode){
        return(
            <div>
                <span>{content.mode} : </span>
                {image ? Renderimage(content.payload):Rendermessage(content.payload)}
            </div>
        ); 
        }
        return(<span></span>);

    }
}
 
export default ListMessages;
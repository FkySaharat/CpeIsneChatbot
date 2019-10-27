import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      
    },
    
    title: {
      flexGrow: 1,
      marginTop:10,
      marginLeft:10,
      marginBottom:10
    },
    bar:{
      backgroundColor:"#1e1e1e"
    }
  }));

  export default function Navbar() {
    const classes = useStyles();
    
  return ( 
           <div>
            <AppBar position="static" className={classes.bar} >          
                <Typography  variant="h5" className={classes.title}> CPE ISNE Chatbot</Typography>        
            </AppBar> 
            </div>
       
        );
    
}
 

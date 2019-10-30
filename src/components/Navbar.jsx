import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { fontFamily } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      
    },
    
    title: {
      flexGrow: 1,
      marginTop:10,
      marginLeft:10,
      marginBottom:10,
      alignItems:'center',
      color:'white'
    },
    bar:{
      backgroundColor:"#1e1e1e",
      minWidth:"375px"
    }
  }));

  export default function Navbar() {
    const classes = useStyles();
    
  return ( 
           <div>
            <AppBar position="static" className={classes.bar} >      
              <Button>
                <Typography  variant="h5" className={classes.title}> <b>CPE ISNE Chatbot</b></Typography>        
              </Button>    
            </AppBar> 
            </div>
       
        );
    
}
 

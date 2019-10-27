import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import cpe from '../cpe.png';
import { Grid, Box } from '@material-ui/core';
import GoogleMapIcon from '../google-maps.png';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  paper: {
    marginLeft:'70px',
    fontFamily:"Roboto",
    color: "white",
    marginRight:'70px'
    
  }, 
  pa: {
    marginLeft:'70px',
    fontFamily:"Roboto",
    color: "#666970",
    marginRight:'70px'
    
  }, 
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: '#0D0D0D',
    
  },
 
  avatar: {
    margin: 10,
    backgroundColor:"#ffffff"
  },

  linelong:{
    height:"2px",
    spacing:"{6}",
    marginTop:"10px",
    backgroundColor:"#EEF5DB",

  },
  content:{
    color:'white',
    marginRight:'20px',
    fontFamily:"Roboto",
  },
  con:{
    color:'#666970',
    marginRight:'20px',
    fontFamily:"Roboto",
  },
  names:{
    display:"flex",
    flexDirection:"row-reverse"
  },
  
  
}));

function Webfooter() {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={12} className={classes.names}>
          <Grid  item s={6} className={classes.names} >
              <div>
                  <Typography variant="h4" className={classes.paper}>
                    <b>{'Powered By'} </b>
                    <div className={classes.linelong}></div>
                  </Typography> 
                  <Typography fontFamily='Roboto' marked="left" gutterBottom className={classes.pa}>                        
                      <p>{'CHOMCHANOK  YAWANA'}</p>
                      <p>{'NUTTAPON  HANKAMOLSIRI'}</p>
                      <p>{'PICHAON  RINRIT'}</p>
                      <p>{'SAHARAT  DIEWTRAKUL'}</p>
                      <p>{'SAOWALUK  KAEWNOK'}</p>
                      <b >ISNE #5</b>
                    
                  </Typography>
                  
              </div>
          </Grid>  

          <Grid item s={6} className={classes.content}>
            <Typography variant='h4'>
              <b>{'Contact Us'}</b> 
              <div className={classes.linelong}></div>

            </Typography>
            <Typography className={classes.con}>

              <p><b>Department of Computer Engineering <br/> 30th Building 4th and 5th Floor</b></p>
              <p>Tel: 084-614-0006, 0-5394-2023  <br/> Faculty of Engineering, Chiang Mai University  <br/>
                239, Huay Kaew Road, Muang District, <br/>
                Chiang Mai Thailand, 50200</p>
            </Typography>  
            <Typography variant='h6'><u>Click on icon for more info</u></Typography>           
            <Grid container display='flex' flexDirection='row'>
              <a href="https://www.google.co.th/maps/place/คณะวิศวกรรมศาสตร์+มหาวิทยาลัยเชียงใหม่/@18.7956724,98.9506894,17z/data=!4m5!3m4!1s0x30da3a6e0d8891c9:0x2c728e2876b2505c!8m2!3d18.7956866!4d98.9528731?hl=th">
                <Avatar className={classes.avatar} src={GoogleMapIcon} display='flex' flexDirection='row' title='Go to Google Map'></Avatar>
              </a>
              <a href='https://cpe.eng.cmu.ac.th/2013/index.php'>
                <Avatar  src={cpe} className={classes.avatar} display='flex' flexDirection='row' title='Go to CPE website'>  </Avatar>
              </a>
            </Grid>    
           

          </Grid>                 
      </Grid>
   </div>
  );
}


export default function Footer() {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.root}>
          
          <footer className={classes.footer}>
                         
              <Webfooter/>              
           
          </footer>
        </div>
    </div>
  );
}

{/* <Grid container spacing={12}>
        <Grid item s={6} className={classes.paper}>

            <Typography variant="h5">
              <b>{'Powered By ISNE#5'} </b>
            </Typography> 
               <div className={classes.linelong}></div>
            <Typography fontFamily='Roboto' marked="left" gutterBottom>                        
                <p>{'CHOMCHANOK  YAWANA'}</p>
                <p>{'NUTTAPON  HANKAMOLSIRI'}</p>
                <p>{'PICHAON  RINRIT'}</p>
                <p>{'SAHARAT  DIEWTRAKUL'}</p>
                <p>{'SAOWALUK  KAEWNOK'}</p>
                
               
            </Typography>
        </Grid>                   
    </Grid> */}
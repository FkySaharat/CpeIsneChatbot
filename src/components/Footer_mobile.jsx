import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import cpe from '../cpe.png';
import { Grid } from '@material-ui/core';
import GoogleMapIcon from '../google-maps.png';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
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
   
    marginTop: 'auto',
    backgroundColor: '#212121',
    minWidth:"375px",
    top: "2000px",
    
  },
 
  avatar: {
    marginLeft:'10px',
    backgroundColor:"#ffffff",
    "&:hover": {
     opacity:'50%'}
    
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
    marginTop:'50px',
    marginBottom:'10px',

  },
  con:{
    color:'#666970',
    marginRight:'20px',
    fontFamily:"Roboto",
  },
  names:{
    display:"flex",
    flexDirection:"row-reverse",
    marginTop:'50px',
  },
  fab: {
    margin: theme.spacing(2),
  },
  
}));

function Webfooter() {
  const classes = useStyles();

  return (
    <div >
      <Grid container  className={classes.names}>
          <Grid  item s={6} className={classes.names} >
              <div>
                  <Typography variant="h4" className={classes.paper}>
                    <b>{'Powered By'} </b>
                    <div className={classes.linelong}></div>
                  </Typography> 

                  <Typography variant='body1' marked="left" gutterBottom className={classes.pa}>                        
                      <br/>{'CHOMCHANOK  YAWANA'} <br/>
                      {'NUTTAPON  HANKAMOLSIRI'} <br/>
                      {'PICHAON  RINRIT'} <br/>
                      {'SAHARAT  DIEWTRAKUL'} <br/>
                      {'SAOWALUK  KAEWNOK'}<br/>

                      <b >ISNE #5</b>
                    
                  </Typography>
                  
              </div>
          </Grid>  

          <Grid  className={classes.content}>
            <Typography variant='h4'>
              <b>{'Contact Us'}</b> 
              <div className={classes.linelong}></div>

            </Typography>
            <Typography className={classes.con} variant='body1'>

              <b><br/>Department of Computer Engineering <br/> 30th Building 4th and 5th Floor</b>
              <br/>Tel: 084-614-0006, 0-5394-2023  <br/> Faculty of Engineering, Chiang Mai University  <br/>
                239, Huay Kaew Road, Muang District, <br/>
                Chiang Mai Thailand, 50200
            </Typography>  
                       
            <Grid container display='flex' flexDirection='row' >
              <a href="https://www.google.co.th/maps/place/คณะวิศวกรรมศาสตร์+มหาวิทยาลัยเชียงใหม่/@18.7956724,98.9506894,17z/data=!4m5!3m4!1s0x30da3a6e0d8891c9:0x2c728e2876b2505c!8m2!3d18.7956866!4d98.9528731?hl=th">
                <Avatar className={classes.avatar} src={GoogleMapIcon} display='flex' flexDirection='row' title='Go to Google Map'></Avatar>
              </a>

              <a href='https://cpe.eng.cmu.ac.th/2013/index.php'>
                <Avatar  src={cpe} className={classes.avatar} display='flex'  flexDirection='row' title='Go to CPE website'></Avatar>
              </a>
                
                

            </Grid>    
           

          </Grid>                 
      </Grid>
   </div>
  );
}


export default function FooterMobile() {
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


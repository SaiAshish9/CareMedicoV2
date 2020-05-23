import React from 'react'
import { Typography } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button"
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import withStyles from "@material-ui/core/styles/withStyles";
import {AiOutlineGooglePlus} from 'react-icons/ai'
import PinterestIcon from '@material-ui/icons/Pinterest';
// import Icon from '@material-ui/core/Icon';
import {FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
import TwitterIcon from '@material-ui/icons/Twitter';

import {content} from '../../../constants/content/general/topbar'





const Topbar = ({classes}) => {

    const icons=[
        {
            icon:<TwitterIcon className={classes.icon} />,
            class:'twitter'
        },
        {
            icon:<AiOutlineGooglePlus area-hidden="true" className= {` ${classes.FaIcon} fa fa-linkedin `} color='primary'  /> ,
            class:'gplus'
        },
        {
            icon:<FaLinkedinIn area-hidden="true" className={` ${classes.FaIcon} fa fa-linkedin`} color='primary'  /> ,
            class:'linkedIn'
        },
        {
            icon:<FaFacebookF className={` ${classes.FaIcon} fa fa-facebook`} color='primary'  /> ,
            class:'facebook'
        },
        {
            icon:<PinterestIcon className={classes.icon} />,
            class:'pinInterest'
        }
    ] 
    




    return (
        <>

<Typography component="div"  className={classes.topbar}>

<Typography component="div"  style={{marginLeft:'5vw'}}>

{
    icons.map((i,k)=>(

<IconButton 
key={k}
className={[classes.iconButton,classes[i.class]]}>
{i.icon}
</IconButton>
    ))
}
</Typography>



<Typography  component="div"  style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

{
    content.map((i,k)=>(

<Typography className={classes.content} key={k} component="h6" style={{color:'white',marginRight:'4vw',fontSize:'12px'}} >
{i.icon}
{i.content}
</Typography>



))
}
</Typography>



<Typography component="div"  style={{marginRight:'5vw'}}>

<Button
 variant="contained"
 startIcon={<PersonIcon style={{fontSize:18}}/>}
 className={classes.authBtn}
  >
Sign Up
</Button>

<Button 
variant="contained" 
startIcon={<LockIcon style={{fontSize:15}}/>}
className={classes.authBtn}
>
Login
</Button>


</Typography>


</Typography>



        </>
    )
}



const styles=theme=>({

authBtn:{
    color:'white',
    marginRight:5,
    background:'rgba(0,0,0,.2)',
    [theme.breakpoints.down('sm')]:{
        display:'none'    
},
[theme.breakpoints.up('sm')]:{
    display:'inline'    
},
'&:hover':{
    background:'rgba(0,0,0,.2)'
}
},

    content:{

        [theme.breakpoints.down('md')]:{
                display:'none'    
        }
        
        },
     
    FaIcon:{

        color:'white',
        fontSize:'15px',
        [theme.breakpoints.down('sm')]:{
            fontSize:'12px'    
        }
    },    
    icon:{
        color:'white',
        fontSize:'15px',
        [theme.breakpoints.down('sm')]:{
            fontSize:'12px'    
    }
    },
        
            topbar:{
                width:'100vw',
                height:'7vh',
                background:'#2e3537',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
            },
         
            iconButton:{
                borderRadius:'50%',
                background:'rgba(0,0,0,.2)',
                padding:7,
                marginRight:4,
                [theme.breakpoints.down('sm')]:{
                   
                }
            },
            twitter:{
                '&:hover':{
                    background:'#1da1f2'
                }
            },
            facebook:{
                '&:hover':{
                    background:'#3b5998'
                }
            },
            linkedIn:{
                '&:hover':{
                    background:'#0077b5'
                }
            },
            pinInterest:{
                '&:hover':{
                    background:'#e60023'
                }
            },
            gplus:{
                '&:hover':{
                    background:'#dc5246'
                }
            }

})


export default withStyles(styles)(Topbar)

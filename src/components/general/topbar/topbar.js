import React,{useContext} from 'react'
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
import {FormDialogContext} from '../../../contexts/FormDialog'





const Topbar = ({classes}) => {

    const {display,toggleFormDisplay}=useContext(FormDialogContext)


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
 startIcon={<PersonIcon style={{fontSize:18,position:'relative',top:3}}/>}
 className={classes.authBtn1}
 onClick={ toggleFormDisplay} 
  >
Sign Up
</Button>

<Button 
variant="contained" 
startIcon={<LockIcon style={{fontSize:15,position:'relative',top:3}} />}
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
    textTransform:'none',
    background:theme.palette.primary.topbarBtn,
    [theme.breakpoints.down('sm')]:{
        display:'none'    
},
[theme.breakpoints.up('sm')]:{
    display:'inline'    
},
'&:hover':{
    background:theme.palette.primary.topbarBtn,
}
},

authBtn1:{
    color:'white',
    marginRight:5,
    textTransform:'none',
    background:theme.palette.primary.topbarBtn,

[theme.breakpoints.up('sm')]:{
    display:'inline'    
},
'&:hover':{
    background:theme.palette.primary.topbarBtn,
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
                background:theme.palette.primary.topbar,
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
            },
         
            iconButton:{
                borderRadius:'50%',
                background:theme.palette.primary.topbarBtn,
                padding:7,
                marginRight:4,
                [theme.breakpoints.down('sm')]:{
                   
                }
            },
            twitter:{
                '&:hover':{
                    background:theme.palette.secondary.twitter
                }
            },
            facebook:{
                '&:hover':{
                    background:theme.palette.secondary.facebook
                }
            },
            linkedIn:{
                '&:hover':{
                    background:theme.palette.secondary.linkedIn
                }
            },
            pinInterest:{
                '&:hover':{
                    background:theme.palette.secondary.pinInterest
                }
            },
            gplus:{
                '&:hover':{
                    background:theme.palette.secondary.gplus
                }
            }

})


export default withStyles(styles)(Topbar)

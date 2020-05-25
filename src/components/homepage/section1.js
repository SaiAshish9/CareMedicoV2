import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import MobilePic from '../../assets/images/mobile.png'

const Section1 = ({classes}) => {
    return (
        <React.Fragment>
            <Container className={classes.container}>

<Grid className={classes.grid}>

<Grid
// lg={12}
// sm={6}
style={{height:'22vh',display:'flex', flexDirection:'column',justifyContent:'space-between'}}>

<Typography style={{fontSize:'1.2rem'}} className={classes.typo}>
An integration tool to bring about
</Typography>


<Typography style={{fontSize:'2.5rem'}} className={classes.typo}>
Transparency
</Typography>


<Typography style={{fontSize:'1.2rem'}} className={classes.typo}>
and free flow of information
</Typography>
</Grid>


<Grid>

<Typography className={classes.typo} style={{marginBottom:'3vh'}}>
PRIVATE SECURE EXCLUSIVE
</Typography>


<Button className={classes.btn} >
Get Started
</Button>

</Grid>


</Grid>

<Grid
sm={12}
xs={12}
lg={5}
style={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    }}
>

<img
src={MobilePic}
className={classes.img}
style={{
    width:'100%',
    minWidth:'35em',
    height:'70vh'
        }}
/>


</Grid>
            </Container>
        </React.Fragment>
    )
}

const styles=theme=>({

container: {
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexWrap:'wrap',
    height:'85vh',
    width:'100vw',
    overflowX:'hidden'

},
grid:{
    minHeight:'70vh',
    display: 'flex',
    flexDirection:'column',
    justifyContent:'space-around',
    flexWrap:'wrap'
},
typo:{
    color:theme.palette.primary.logoDark
},
btn:{
    width:'10rem',
    height:'7vh',
    borderRadius:10,
    background:theme.palette.primary.main,
    color:'#fff',
    '&:hover':{
        background:theme.palette.primary.main
    }
},
img:{
    [theme.breakpoints.down('sm')]:{
marginTop:'10vh'
    }  
}


})


export default withStyles(styles)(Section1)

import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '../general/button'
import Typography from '@material-ui/core/Typography'

const LeftRight = ({content,classes,image}) => {
    return (
    
            
            <Grid

className={classes.grid}

>    <Grid
    lg={5}
    >
    <img
    src={image}
    style={{width:'100%'}}
    className={classes.img}
    />
    </Grid>

    <Grid
    lg={3}
    className={classes.desc}

    >


<Typography className={classes.typo}>
{content}
</Typography>

<Typography className={classes.typo1} >
lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, con
</Typography>

<Button>
    Explore
</Button>

    </Grid>

</Grid>


    )
}

const styles =theme=>({
desc:{
    display:'flex',
    justifyContent:'space-around',
    flexDirection:'column',
    height:'40vh'
},
grid:{
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    flexWrap: 'wrap',
    alignItems:'center',
    padding:'5vw'
},
typo:{
    color:theme.palette.primary.logoDark,
    fontSize:'1.5rem'
},
typo1:{
    color:'#999',
    fontWeight:'#ebebeb',
    fontSize:15
},
img:{
    borderRadius:10,
    height:'45vh',
    [theme.breakpoints.up('md')]:{
        // marginLeft:'7rem'
    }
}
})

export default withStyles(styles)(LeftRight)

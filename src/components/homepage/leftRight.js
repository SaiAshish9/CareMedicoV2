import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

import Button from '../general/button'
import Typography from '@material-ui/core/Typography'

const LeftRight = ({content,classes,image}) => {
    return (
        <Container
        style={{
            minHeight:'50vh',
            margin:'10vh 0'
        }}
        >
            
            <Grid

className={classes.grid}

>    <Grid
    lg={6}
    >
    <img
    src={image}
    style={{width:'100%'}}
    className={classes.img}
    />
    </Grid>

    <Grid
    lg={4}
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


        </Container>
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
    justifyContent:'space-between',
    alignItems:'center',
    flexWrap: 'wrap',
    alignItems:'center'
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
        marginLeft:'7rem'
    }
}
})

export default withStyles(styles)(LeftRight)

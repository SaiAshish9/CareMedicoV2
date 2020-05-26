import React from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Logo from '../../../assets/images/logo.png'

const Footer = ({classes}) => {

const images=[
     Logo,
    'https://cdn.indiawealth.in/public/images/icons/apple.svg',
    'https://cdn.indiawealth.in/public/images/icons/google.svg'
]


const links=[
{
    title:'Company',
    options:['Home','About Us','Complaints Status','Site Map']
},
{
    title:'Support',
    options:['Contact Us']
},
{
    title:'Policies',
    options:['Terms & Conditions','Security','Privacy Policy']
}
]

    return (
        <Grid className={classes.container}>
            
{/* <Grid lg={3} xs={5} className={classes.grid}> */}

{/* <Container> */}

{/* {
    images.map((i,k)=>(
        <img
        src={i}
        key={k}
        style={{
            width:k===0?'50%':'50%',
            height:k===0?'9vh':'7vh',
            margin:'5px'
        }}
        />
    ))
} */}

{/* </Container> */}

{/* </Grid> */}


{links.map((i,k)=>(

<Grid xs={6} key={k} lg={4} className={classes.grid}>


<Grid style={{height:'20vh'}}>


<Typography style={{color:'white',marginLeft:5,marginBottom:20}}>
    {i.title}
</Typography>


{
    i.options.map((a,b)=>(
<Typography key={b} 
style={{color:'#abc4c7',
fontSize:12,
margin:'5px'
}}>
    {a}
</Typography>
    ))
}
</Grid>



</Grid>


))}

        </Grid>
    )
}

const styles =theme=>({

    container:{
        background:theme.palette.primary.violet,
        width: '98.9vw',
        minHeight:'35vh',
        display:'flex',
        flexWrap: 'wrap'
    },
    grid:{
        width:'100%',
        height:'35vh',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        [theme.breakpoints.down('sm')]:{
            marginLeft:'5vw'
        },
        textAlign:'start'
    }

})

export default withStyles(styles)(Footer)

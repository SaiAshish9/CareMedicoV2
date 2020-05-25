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
            
<Grid lg={3} xs={5} className={classes.grid}>

<Container>

{
    images.map((i,k)=>(
        <img
        src={i}
        key={k}
        style={{
            width:k===0?'60%':'60%',
            height:k===0?'9vh':'7vh',
            margin:'5px'
        }}
        />
    ))
}

</Container>

</Grid>


{links.map((i,k)=>(

<Grid xs={5} key={k} lg={3} className={classes.grid}>

<Typography style={{color:'white'}}>
    {i.title}
</Typography>

<Grid style={{height:'18vh'}}>

{
    i.options.map((a,b)=>(
<Typography key={b} 
style={{color:'#abc4c7',
fontSize:12,
margin:'5px 0'
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
        background:theme.palette.primary.topbar,
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
        justifyContent:'space-around',
        [theme.breakpoints.down('sm')]:{
            marginLeft:'5vw'
        }
    }

})

export default withStyles(styles)(Footer)

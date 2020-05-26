import React from 'react'
import Container from '@material-ui/core/Container'
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import {Link} from 'react-router-dom'
import {AiOutlineBars} from 'react-icons/ai' 
import IconButton from '@material-ui/core/IconButton'



const Navbar = ({classes}) => {


const links=[
    {
    link:'HOME'
    },
    {
    link:'SERVICES'
    },
    {
    link:'CORONA'
    },
    {
    link:'BLOG'
    },
    {
    link:'CONTACT US'
    },
]


    return (
        <React.Fragment>
            
<Container className={classes.container}>

<img
src="https://caremedico.com/wp-content/uploads/2020/02/care_medico_logo-1.png"
alt="caremedico"
style={{height:'10vh'}}
/>


<Grid>

{
    links.map((i,k)=>(
        <Link key={k} className={k!==0? classes.navLink: classes.higlight}
        
        >
        {i.link}
        </Link>
    ))
}


<IconButton color="primary" className={classes.hamburger}>
<AiOutlineBars  />
</IconButton>


</Grid>

</Container>


        </React.Fragment>
    )
}

const styles=theme=>({

container:{
display:'flex',
alignItems:'center',
justifyContent:'space-between'
},
navLink:{
    textDecoration:'none',
    margin:'0 30px',
    color:theme.palette.primary.logoDark,
    '&:hover':{
        color:theme.palette.primary.main
    },
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
},
higlight:{
    textDecoration:'none',
    margin:'0 5px',
    color:theme.palette.primary.main,
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
},
hamburger:{
    [theme.breakpoints.up('md')]:{
        display:'none'
    }  
}

})


export default withStyles(styles)(Navbar)

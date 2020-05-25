import React from 'react'

import Container from '@material-ui/core/Container'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import {AiOutlineMonitor} from 'react-icons/ai'
import {RiCustomerService2Line,RiToolsLine} from 'react-icons/ri'
import IconButton from '@material-ui/core/IconButton'
import {GiHeartPlus} from 'react-icons/gi'


const Section5 = ({classes}) => {


const content=[
    {
        icon:<AiOutlineMonitor className={classes.icon}/>,
        desc:'Continuous monitoring will eliminate entry of counterfeit drugs into the supply chain'
    },
    {
        icon:<RiCustomerService2Line className={classes.icon}/>,
        desc:'Enhanced customer convenience in form of one stop fulfillment of the order'
    },
    {
        icon:<RiToolsLine className={classes.icon}/>,
        desc:'vertically integrated inventory management tool with real time visibility'
    },
    {
        icon:<GiHeartPlus className={classes.icon} style={{marginTop:-10}} />,
        desc:'We are here to fulfill your all health related needs'
    },
]

    return (
        <Container className={classes.container}  >

   <Typography className={classes.typo}  style={{fontSize:'1.4rem'}}>

Why CareMedico ?


   </Typography>


   <Typography className={classes.typo1}>

   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet vehicula augue, ut feugiat tortor egestas at. Ut non placerat massa. Integer eget purus et orci commodo lacinia
   </Typography>


<Grid className={classes.grid}>

{
    content.map((i,k)=>(
<Grid key={k} className={classes.desc}>
 <IconButton>
 {i.icon}     
</IconButton>   
<Typography>
{i.desc}
</Typography>
</Grid>
    ))
}





</Grid>

  
        </Container>
    )
}

const styles =theme=>({

    typo:{
            color:theme.palette.primary.main,
            textAlign:'center',
            width:'90%'
    },

typo1:{
    color:'#999',
    textAlign:'center',
    width:'90%'
},
container:{
    width:'100vw',
    minHeight:'60vh',
    marginBottom:'10vh',
    display: 'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around'
},
grid:{
    color:'#999',
    width:'100%',
    display: 'flex',
    flexDirection:'row',
    flexWrap: 'wrap',
    alignItems:'center',
    justifyContent:'space-around'
},
desc:{
    width:'40%',
    margin:20,
    display:'flex',
    [theme.breakpoints.down('xs')]:{
        flexDirection: 'column'
    }
}

})

export default withStyles(styles)(Section5)

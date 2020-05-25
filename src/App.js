import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

import './App.css'

import Topbar from './components/general/topbar/topbar'
import SpeedDial from './components/general/speedDial'
import Navbar from './components/general/navbar'
import Section1 from './components/homepage/section1'
import Grid from '@material-ui/core/Grid'

const App = () => {




    return (
   

<React.Fragment >

<Grid style={{overflowX:'hidden'}}>

<Topbar/>

<Navbar/>

<SpeedDial/>

<Section1/>
</Grid>


</React.Fragment>


    )
}

const styles =theme=>({


    

})

export default withStyles(styles)(App)
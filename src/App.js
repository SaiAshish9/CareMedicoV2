import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

import './App.css'

import Topbar from './components/general/topbar/topbar'
import SpeedDial from './components/general/speedDial'


const App = () => {




    return (
   

<React.Fragment >

<Topbar/>

<SpeedDial/>


</React.Fragment>


    )
}

const styles =theme=>({


    

})

export default withStyles(styles)(App)
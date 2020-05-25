import React,{useState} from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

import './App.css'

import Topbar from './components/general/topbar/topbar'
import SpeedDial from './components/general/speedDial'
import Navbar from './components/general/navbar'
import Section1 from './components/homepage/section1'
import Grid from '@material-ui/core/Grid'
import {FormDialogContext} from './contexts/FormDialog'

import FormDialog from './components/homepage/dialog'


const App = ({classes}) => {

    const [display,setDisplay]=useState(false)



    return (
   

        <FormDialogContext.Provider
        value={{
          display,
          toggleFormDisplay:()=>setDisplay(!display)
        }}
        >
<Grid style={{overflowX:'hidden'}}>

<Topbar/>

<Navbar/>

<SpeedDial/>

<Section1/>

<FormDialog/>

</Grid>


</FormDialogContext.Provider>


    )
}

const styles =theme=>({


    

})

export default withStyles(styles)(App)
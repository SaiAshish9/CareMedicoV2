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
import LeftRight from './components/homepage/leftRight'
import RightLeft from './components/homepage/rightLeft'
import DashboardImg1 from './assets/images/dashboard1.png'
import DashboardImg2 from './assets/images/dashboard2.png'
import DashboardImg3 from './assets/images/dashboard3.png'

import Footer from './components/general/footer'

import Section5 from './components/homepage/section5'


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


<LeftRight
content="Visibility over availability of inventory in the adjacent links of the supply chain"
image={DashboardImg1}
/>


<RightLeft
content="Enablement of demand mapping and forecasting"
image={DashboardImg2}
/>

<LeftRight
content="Proper documentation management for prescription and invoices at all levels"
image={DashboardImg3}
/>

</Grid>


<Section5/>

<Footer/>


</FormDialogContext.Provider>


    )
}

const styles =theme=>({


    

})

export default withStyles(styles)(App)
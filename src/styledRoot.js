import React from 'react'

import {MuiThemeProvider,createMuiTheme,responsiveFontSizes} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'

const theme=createMuiTheme({

    palette:{
        background:{
           default:'white'
        },
        primary:{
            main:pink[500],
            dark:'black'
        },
        secondary:{
            main:purple[500]
        },
        topbar:{
            main:pink[500]
        }
    },
    typography:{
        useNextVariants:true
    },
    background:'white'

})


function styledRoot(Component){
  
    function Root(props){


   return (
   <MuiThemeProvider theme={responsiveFontSizes(theme)}  >
        <CssBaseline/>
        <Component {...props}/>
   </MuiThemeProvider>
    )
    }

return Root

}

export default styledRoot

import React from 'react'

import {MuiThemeProvider,createMuiTheme,responsiveFontSizes} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'




function styledRoot(Component){
  



   
    function Root(props){



        const theme=createMuiTheme({
            palette:{
                // type:'dark',
                background:{
                   default:props.dark?'#303030':'white'
                },
                primary:{
                    main:pink[500],
                    topbar:'#2e3537',
                    topbarBtn:'rgba(0,0,0,.2)'
                
                },
                secondary:{
                    main:purple[500],
                    twitter:'#1da1f2',
                    facebook:'#3b5998',
                    linkedIn:'#0077b5',
                    pinInterest:'#e60023',
                    gplus:'#dc5246'
                }
            },
            typography:{
                useNextVariants:true
            }
        })
        


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

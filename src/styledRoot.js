import React from 'react'

import {MuiThemeProvider,createMuiTheme,responsiveFontSizes} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import purple from '@material-ui/core/colors/purple'

// import AvenirNext from './assets/Metropolis-Regular.otf'





function styledRoot(Component){
  



   
    function Root(props){



        const theme=createMuiTheme({
            palette:{
                // type:'dark',
                background:{
                   default:props.dark?'#303030':'white'
                },
                primary:{
                    main:'#EA315A',
                    topbar:'#2e3537',
                    topbarBtn:'rgba(0,0,0,.2)',
                    logoDark:'#5d5d5e',
                    violet:'#5A6AB0'
                
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
                useNextVariants:true,
                fontFamily:'Avenir Next,"sans-serif"',
                // fontFamily: 'Metropolis',
                // fontFamily:"'Poppins', sans-serif"
                fontFamily: "'Roboto', sans-serif"
  
            
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

import React from 'react'

import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'

const Btn = ({classes,children}) => {
    return (
        <>
          <Button className={classes.btn} >
               {children}
           </Button>  
        </>
    )
}

const styles =theme=>({
    btn:{
        width:'10rem',
        height:'7vh',
        borderRadius:10,
        background:theme.palette.primary.main,
        color:'#fff',
        '&:hover':{
            background:theme.palette.primary.main
        }
    }
})

export default withStyles(styles)(Btn)

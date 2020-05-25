import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

import {ThemeContext} from '../../../contexts/ThemeContext'


const useStyles = makeStyles((theme) => ({

  speedDial: {
    position: 'fixed',
    bottom: '3vh',
    right: theme.spacing(2),

  }
}));





export default function OpenIconSpeedDial() {


const {dark,toggleDark}=useContext(ThemeContext)




    const actions = [

        {
        icon: <Brightness2Icon
                   onClick={!dark && toggleDark} 
                   />,
         name: 'dark'
         },

      { 
        icon: <WbSunnyIcon 
                  onClick={dark && toggleDark} 
                  />,
        name: 'white' }

    ]


  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const [clicked,setClicked] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

      <SpeedDial
        ariaLabel="Theme Color"
        className={classes.speedDial}
        hidden={hidden}
        icon={<ColorLensIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
          key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
  );
}
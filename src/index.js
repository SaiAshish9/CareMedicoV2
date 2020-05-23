import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'
import {ThemeContext} from './components/general/speedDial'



const ThemeComponent =()=>{



  const [dark,setDark]= React.useState(false);



  return (  
<ThemeContext.Provider value={{
  dark,
  toggleDark:()=>setDark(!dark)
}}>

<BrowserRouter>
<Root dark={dark} />
</BrowserRouter> 

</ThemeContext.Provider>

)
}


ReactDOM.render(
  <ThemeComponent/>
 ,
  document.getElementById('root')
);


serviceWorker.unregister();

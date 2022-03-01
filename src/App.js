import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from "./Components/Create";
import Notes from "./Components/Notes";
import {createTheme, ThemeProvider} from '@material-ui/core/styles'


const theme = createTheme({
  palette:{
    primary:{
      main: '#fefefe'
    }
  }
})
function App() {
  return (
    <ThemeProvider theme = {theme}>
   <Router>
     <Switch>
       <Route exact path= "/" >
         <Notes/>
       </Route>
        <Route exact path="/Create"> 
          <Create/>
        </Route>
     </Switch>
   </Router>
   </ThemeProvider>
  );
}

export default App;

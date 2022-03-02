import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from "./Components/Create";
import Notes from "./Components/Notes";
// import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
// import {purple} from '@material-ui/core/colors'
// const theme = MuiCreateTheme({
//   palette:{
//     primary:{
//       main : '#fefefe'
//     },
//     secondary: purple
//   },

//   typography:{
//     fontFamily: 'Quicksand',
//     fontWeightLight: 400,
//     fontWeightRegular: 500,
//     fontWeightMedium: 600,
//     fontWeightBold: 700,

//   }
// })
function App() {
  return (

    // <MuiThemeProvider theme = {theme}>
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
  //  </MuiThemeProvider>
  );
}

export default App;

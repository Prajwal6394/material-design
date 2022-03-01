import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Create from "./Components/Create";
import Notes from "./Components/Notes";

function App() {
  return (
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
  );
}

export default App;

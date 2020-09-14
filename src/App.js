import React from "react"

import Home from "./components/Home"
import AddUser from "./components/AddUser"
import EditUser from "./components/EditUser"

//use router library for url routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//use BootStrap to styling
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem  auto"}}>
      <Router>
        <Switch>
          {/*page routing:
            Home page must have exact path
          */}
          <Route exact path ="/" component={Home} /> 
          <Route path ="/add" component={AddUser} />
          <Route path ="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </div>
  )
}
export default App
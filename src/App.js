import React from 'react';
import './App.css';
import $ from "jquery";
import "bootstrap/js/src/dropdown";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Brand from "./Brand";
import SignIn  from "./Sign";
import Register  from "./Register";

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    return (
       <div className="App">
       <Router>
       <Route
         path="/"
         exact
         component= {Home} />
       <Route path="/Brand" component={Brand} />
       <Route path="/Sign" component={SignIn} />
       <Route path="/Register" component={Register} />
     </Router>
       </div>
    );
  }
}

export default App;

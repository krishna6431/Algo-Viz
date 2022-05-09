import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Sorting from "./Components/Sorting/Sorting";
import Searching from "./Components/Searching/Searching";
import Home from "./Components/Home/Home";
// import About from './Components/About/About';
import Cards from "./Components/Home/Cards";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sort" component={Sorting} />
          <Route exact path="/searching" component={Searching} />
          {/* <Route exact path='/about' component='#' /> */}
          <Route exact path="/exploreMe" component={Cards} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

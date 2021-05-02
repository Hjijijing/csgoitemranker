import ItemList from "./ItemList";
import Voter from "./Voter";
import "./styles.css";
import NavBar from "./NavBar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router basename="/csgoitemranker/">
      <div className="container">
        <NavBar />
        <div className="indent">
          <Switch>
            <Route path="/rankings">
              <ItemList />
            </Route>
            <Route path="/vote">
              <Voter />
            </Route>
            <Route path="/">
              <Redirect to="/rankings"></Redirect>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

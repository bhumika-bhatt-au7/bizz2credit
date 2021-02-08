import "./App.css";
import { Switch, Route } from "react-router-dom";

import { Login, Home, SignUp } from "./components";

function App() {
  let Authorized = localStorage.getItem("user") ? true : false;
  console.log(Authorized);
  return (
    <div className="App">
      <Switch>
        {Authorized ? (
          <Route exact path="/" component={Home}></Route>
        ) : (
          <Route exact path="/" component={Login}></Route>
          // <Route exact path="/signup" component={SignUp}></Route>
        )}
        {Authorized ? (
          <Route exact path="/" component={Home}></Route>
        ) : (
          // <Route exact path="/" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
        )}
      </Switch>
    </div>
  );
}

export default App;

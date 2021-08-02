import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import NotFound from "./components/NotFound";
import SignUp from "./components/SignUp";


function App() {
  return (
    <HashRouter>
      <Switch>
          <Route path='/' component={Home} />
          <Route path='/logowanie' component={SignIn} />
          <Route path='/rejestracja' component={SignUp} />
          <Route path='/*' component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default App;

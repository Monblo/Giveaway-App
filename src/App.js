import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";


function App() {
  return (
    <HashRouter>
      <Switch>
       <Route path='/' component={Home} />
      </Switch>
    </HashRouter>
  );
}

export default App;

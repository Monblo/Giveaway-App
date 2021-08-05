import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./Views/Home";
import SignIn from "./Views/SignIn/SignIn";
import NotFound from "./Views/NotFound";
import SignUp from "./Views/SignUp/SignUp";

function App() {

    return (
        <>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/logowanie' component={SignIn}/>
                    <Route path='/rejestracja' component={SignUp}/>
                    <Route path='/*' component={NotFound}/>
                </Switch>
            </HashRouter>
        </>
    );
}

export default App;

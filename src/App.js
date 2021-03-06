import {HashRouter, Route, Switch} from "react-router-dom";
import Home from "./Views/Home";
import SignIn from "./Views/SignIn/SignIn";
import NotFound from "./Views/NotFound";
import SignUp from "./Views/SignUp/SignUp";
import GiveawayForm from "./Views/GiveawayForm/GiveawayForm";
import SignOut from "./Views/SignOut";
import {AuthProvider} from "./authContext";
function App() {

    return (
        <>
            <AuthProvider>
                <HashRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/logowanie' component={SignIn}/>
                        <Route path='/rejestracja' component={SignUp}/>
                        <Route path='/giveaway' component={GiveawayForm} />
                        <Route path='/wyloguj' component={SignOut} />
                        <Route path='/*' component={NotFound}/>
                    </Switch>
                </HashRouter>
            </AuthProvider>
        </>
    );
}

export default App;

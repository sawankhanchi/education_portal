import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Discover from "./Discover";
import Message from "./Message";
import Setting from "./Setting";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";

const App = () => {
    return (
        <>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/message" component={Message} />
        <Route exact path="/setting" component={Setting} />
        <Redirect to="/" />
        </Switch>
          
        </>
    );
};

export default App;
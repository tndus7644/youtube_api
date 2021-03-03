import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Video from "../pages/Video";
import Trending from "../pages/Trending";

const Routes = () => {

    return(
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/search/:query"} component={Search}/>
            <Route path={"/videos/:id"} component={Video}/>
            <Route path={"/trending"} component={Trending}/>
        </Switch>
    )
}


export default Routes;
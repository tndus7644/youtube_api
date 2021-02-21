import ReactDOM from 'react-dom';
import App from "./view/App";
import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import {Router} from "react-router-dom";
import History from './lib/History'

ReactDOM.render(
    <Provider store={store}>
        <Router history={History}>
            <App/>
        </Router>
    </Provider>
    , document.getElementById('root'));
import {bindActionCreators} from 'redux';
import store from "./store";

import {Action as videoAction} from './Video/redux';

const {dispatch} = store;

export const videoActions = bindActionCreators(videoAction.Creators, dispatch);
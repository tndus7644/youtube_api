import {bindActionCreators} from 'redux'
import store from "./store";

import {Action as videoAction} from './Video/redux'
import {Action as searchAction} from './Search/redux'
import {Action as channelAction} from './Channel/redux'
import {Action as appAction} from './App/redux'

const {dispatch} = store;

export const videoActions = bindActionCreators(videoAction.Creators, dispatch);
export const searchActions = bindActionCreators(searchAction.Creators, dispatch);
export const channelActions = bindActionCreators(channelAction.Creators, dispatch);
export const appActions = bindActionCreators(appAction.Creators, dispatch);

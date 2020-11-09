import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from "redux-promise-middleware";
import hackerNewsReducter from './hackerNewsReducer';
import mediumReducer from './mediumReducter';
import redditReducer from './redditReducer'

const rootReducter = combineReducers({
    hackerNews: hackerNewsReducter,
    medium: mediumReducer,
    reddit: redditReducer
})

export default createStore(rootReducter, applyMiddleware(promiseMiddleware));
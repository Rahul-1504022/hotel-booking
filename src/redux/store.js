import thunk from "redux-thunk";
import logger from "redux-logger";
import { legacy_createStore, applyMiddleware } from 'redux';
import { Reducer } from "./reducer";

const myStore = legacy_createStore(Reducer, applyMiddleware(logger, thunk));
export default myStore;
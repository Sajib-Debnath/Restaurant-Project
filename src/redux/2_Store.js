import {createStore, applyMiddleware} from 'redux';
import {Reducer} from './1_Reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const myStore = createStore(Reducer, applyMiddleware(logger, thunk));

export default myStore; 
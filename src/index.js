import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchFieldReducer, getMonstersReducer } from './redux/reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './App';

const logger = createLogger();
const rootReducer = combineReducers({ searchFieldReducer, getMonstersReducer })
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root'));

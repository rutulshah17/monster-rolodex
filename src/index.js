import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchFieldReducer } from './redux/reducers';
import './index.css';
import App from './App';

const store = createStore(searchFieldReducer);

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root'));

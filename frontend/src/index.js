import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-fontawesome/lib/'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import LoginReducer from './reducers/loginReducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { foodReducer } from './reducers/foodReducer';
import { dailyReducer } from './reducers/dailyReducer';

let rootReducer = combineReducers({
    login:LoginReducer,
    food:foodReducer,
    daily:dailyReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

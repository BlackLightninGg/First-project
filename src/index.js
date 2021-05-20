import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/redux-store.js';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();

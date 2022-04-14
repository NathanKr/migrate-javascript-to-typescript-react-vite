import React from 'react';
// import ReactDOM from 'react-dom'; < ver 18
import ReactDOM from 'react-dom/client'; // >= ver 18

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root')); < ver 18
const root = ReactDOM.createRoot( document.getElementById('root')); // >= ver 18
root.render(<App />) // >= ver 18

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

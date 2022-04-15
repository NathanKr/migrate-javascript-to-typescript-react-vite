import React from 'react';
// import ReactDOM from 'react-dom'; < ver 18
import ReactDOM from 'react-dom/client'; // >= ver 18

import './index.css';
import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('root')); < ver 18
const root = ReactDOM.createRoot( document.getElementById('root')!); // >= ver 18
root.render(<App />) // >= ver 18


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import WebFont from 'webfontloader';
import 'tachyons';
import './index.css';


WebFont.load({
    google: {
        families: ['Montserrat', 'sans-serif']
    }
});

ReactDOM.render(<App />, document.getElementById('root'));
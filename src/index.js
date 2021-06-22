import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';

import App from './App';
import config from './config';

import 'typeface-inter';
import './index.scss';

if (config.googleTagManagerID) {
  TagManager.initialize({ gtmId: config.googleTagManagerID });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import React from 'recat'
import ReactDOM from 'react-dom';
import './index.css'
import './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker'
React.DOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
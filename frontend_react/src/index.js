import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/index'



ReactDOM.render(
<Provider store={store} >
    <Router >
        <App />
    </Router>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();

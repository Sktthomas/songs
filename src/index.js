import  React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux'

import App from './components/App';
import reducers from './reducers'

ReactDOM.render(
    <Provider store ={createStore(reducers)}> {/* creating the provider component and passing in the store with reducers*/}
    <App/>
    </Provider>,
    document.querySelector('#root')
);

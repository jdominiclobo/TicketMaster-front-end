import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import configureStore from './store/configureStore';

const store = configureStore()
console.log(store.getState())

store.subscribe(() => {
  console.log(store.getState())
})


const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
)


ReactDOM.render(jsx ,document.getElementById('root'));



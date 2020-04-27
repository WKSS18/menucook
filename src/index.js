import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'assets/styles/reset.css'
import store from "./store/store"
// import {MapProvider} from "./context/MapContext"
import {Provider} from "react-redux"
ReactDOM.render(
  // App中的所有组件可以共享这个store的数据
  <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById('root')
);

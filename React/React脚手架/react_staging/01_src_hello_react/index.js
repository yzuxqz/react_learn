//引入react核心库
import React from 'react';
//引入reactDOM
import ReactDOM from 'react-dom';
//引入App组件
import App from './App';
//用于测试性能
import reportWebVitals from './reportWebVitals';

//渲染App到页面
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

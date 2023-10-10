import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Card from './components/Card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Card imgKey='chair'
            name='Стул, IKEA'
            price='4999 Kc'/>
      <Card imgKey='lamp'
            name='Лампа, IKEA'
            price='2999 Kc' />
      <Card imgKey='sofa'
            name='Диван, IKEA'
            price='9999 Kc' />
      <Card imgKey='table'
            name='Стол, IKEA'
            price='5999 Kc' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

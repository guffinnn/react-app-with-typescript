import React from 'react';
import Card from './components/Card';

function App() {
    return (
        <div className="container">
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
        </div>
    );
}

export default App;

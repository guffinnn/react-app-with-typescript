import React from 'react';

// Импортирую маршрутизацию
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Импортирую необходимые компоненты
import Card from './components/Card';
import ProductPage from './components/ProductPage';

// Функция добавления App
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/card/chair" element={<ProductPage imgKey='chair' name='Стул, IKEA' price='4999 Kc' />} />
                <Route path="/card/lamp" element={<ProductPage imgKey='lamp' name='Лампа, IKEA' price='2999 Kc' />} />
                <Route path="/card/sofa" element={<ProductPage imgKey='sofa' name='Диван, IKEA' price='9999 Kc' />} />
                <Route path="/card/table" element={<ProductPage imgKey='table' name='Стол, IKEA' price='5999 Kc' />} />
                <Route path="/react-app-with-typescript" element={
                    <div className="container">
                        <Card imgKey='chair' name='Стул, IKEA' price='4999 Kc'/>
                        <Card imgKey='lamp' name='Лампа, IKEA' price='2999 Kc' />
                        <Card imgKey='sofa' name='Диван, IKEA' price='9999 Kc' />
                        <Card imgKey='table' name='Стол, IKEA' price='5999 Kc' />
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;

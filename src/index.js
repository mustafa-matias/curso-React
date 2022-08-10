import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart';
import './services/Firebase';
import OrderDetailConteiner from './components/OrderDetailConteiner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<ItemListConteiner greeting="BIENVENIDO STORE" />} />
            <Route path='/category/:idCategory' element={<ItemListConteiner greeting="Seleccione su producto" />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order/:id' element={<OrderDetailConteiner/>} />
            <Route path='*' element={<ItemListConteiner greeting="Bienvenido a tu Store" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </CartContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

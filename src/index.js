import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListConteinerJewelery from './components/ItemListConteinerJewelery.js';
import ItemListConteinerElectronics from './components/ItemListConteinerElectronics.js';
import ItemListConteinerWomensClothing from './components/ItemListConteinerWomensClothing.js';
import ItemListConteinerMensClothing from './components/ItemListConteinerMensClothing.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<ItemListConteiner greeting="BIENVENIDO STORE"/>}/>
          <Route path='/category/womensclothing' element={<ItemListConteinerWomensClothing greeting="Women's Clothing"/>}/>
          <Route path='/category/mensclothing' element={<ItemListConteinerMensClothing greeting="Men's Clothing"/>}/>
          <Route path='/category/electronics' element={<ItemListConteinerElectronics greeting="Electronics"/>}/>
          <Route path='/category/jewelery' element={<ItemListConteinerJewelery greeting="Jewelery"/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={""}/>
          <Route path='*' element={<ItemListConteiner greeting="Bienvenido a tu Store"/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

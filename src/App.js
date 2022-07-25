import './App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { CartContext } from './components/CartContext';
import { useContext } from "react";
import VistaProductos from './components/VistaProductos';

function App() {
  const { productosAgregados } = useContext(CartContext);
  console.log(productosAgregados)

  return (
    <div className="App bgNav d-flex flex-column vh-100">
      <NavBar />
      <VistaProductos carrito={productosAgregados} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

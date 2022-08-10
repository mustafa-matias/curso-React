
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const Cart = () => {

    const { productosAgregados, removeItem, clearAll, totalPrice } = useContext(CartContext);

    return (
        <div className='contenedorCart'>
            {productosAgregados.length > 0 ? (
                <>
                    <div className='contenedorCartProducts bg-dark'>
                        <div className="border border-dark bg-dark text-light fw-bold d-flex justify-content-around text-center h10 align-item-center">
                            <p>IMAGE</p>
                            <p>TITLE</p>
                            <p>CANTIDAD</p>
                            <p>PRICE</p>
                            <p>ELIMINAR</p>
                        </div>
                        {productosAgregados.map((producto) => (
                            <div key={producto.id} className="text-dark bg-light contenedorCartProduct">
                                <img src={producto.image} className='contenedorImgCart mx-2' alt={producto.title} />
                                <p className='mx-3'>{producto.title}</p>
                                <p>{producto.cantidad}</p>
                                <p>${producto.price.toFixed(2)}</p>
                                <button className="btn btn-danger mx-5" onClick={() => { removeItem(producto.id) }}>Eliminar 🗑</button>
                            </div>))}
                        <p className="bg-dark text-light fw-bold d-flex justify-content-center m-2">Precio Total ${totalPrice.toFixed(2)}</p>
                        <button className="btn btn-danger mx-auto mb-2  w-75" onClick={clearAll} >🗑 Limpiar todos 🗑</button>
                    </div>
                    <Form/>
                </>
            )
                :
                (
                    <>
                        <p className="text-light fw-bold pSinProductos">NO HAY PRODUCTOS EN EL CARRITO</p>
                        <Link to="/">
                            <button type="button" className="btn btn-danger m-3">Volver Inicio</button>
                        </Link>
                    </>
                )}
        </div >
    )
}

export default Cart
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import Swal from 'sweetalert2';

const ItemDetail = ({ item }) => {

    const [cart, setCart] = useState(true);

    function handleOnAdd(n) {
        setCart(false);
        Swal.fire({
            position: 'top-end',
            background: '#323232',
            color: '#fff',
            icon: 'info',
            title: `${n} ${item.title}!`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    return (
        <div className="contenedorDetalle  ">
            <div className="contenedorImgDetalle">
                <img className='imgDetalle' src={item.image} alt={item.title} />
            </div>
            <div className="itemDetalle text-dark">
                <h3 className='fs-1'> {item.title} </h3>
                <p className="descripcionDetalle fs-4">{item.description}</p>
                <p className="precioDetalle fs-2"> ${item.price} </p>
                {cart ?
                    <ItemCount stock={item.rating.count} initial={1} onAdd={handleOnAdd} /> :
                    <Link to="/cart" className="btnCarrito btnIrCarrito">IR A CARRITO</Link>
                }
            </div>
        </div>)
}

export default ItemDetail
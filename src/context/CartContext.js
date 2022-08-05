import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [productosAgregados, setProductosAgregados] = useState([]);

    const addItem = async(item, quantity) => {
        const existe = productosAgregados?.some(producto => producto.id === item.id);
        if (existe) {
            productosAgregados.map(producto => {
                if (producto.id === item.id) {
                    producto.cantidad += quantity;
                    producto.price += (item.price * quantity);
                }
            })
        } else {
            item.cantidad = quantity;
            item.price = (item.price * quantity);
            setProductosAgregados(productosAgregados.concat([item]));
        }
    }

    const removeItem = (itemId) => {
        setProductosAgregados(productosAgregados.filter((producto) => producto.id !== itemId));
    }

    const clearAll = () => {
        setProductosAgregados([]);
    }

    const totalPrice = productosAgregados.reduce((acc, producto) => {
        return (acc + producto.price);
    }, 0)

    const cantidadItem = productosAgregados.reduce((acc, producto) => {
        return acc + producto.cantidad;
    }, 0)

    return <CartContext.Provider value={{ productosAgregados, addItem, removeItem, clearAll, totalPrice, cantidadItem }}>
        {children}
    </CartContext.Provider>
}


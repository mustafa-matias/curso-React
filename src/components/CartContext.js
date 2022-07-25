import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [productosAgregados, setProductosAgregados] = useState([]);

    const addItem = (item, quantity) => {
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

    return <CartContext.Provider value={{ productosAgregados, addItem }}>
        {children}
    </CartContext.Provider>

}


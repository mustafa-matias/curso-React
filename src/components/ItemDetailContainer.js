import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductById } from "../services/Firebase"

const ItemDetailContainer = () => {

    let params = useParams();
    const [productoElegido, setProductoElegido] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            getProductById(params.id).then((snapshot) =>
                setProductoElegido({ id: params.id, ...snapshot.data() }));
            setLoading(false);
        }, 0)
    }, [params.id])

    return (
        loading ? (
            <div className="lds-roller h-85"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        ) : (productoElegido && <ItemDetail item={productoElegido} />)
    )
}

export default ItemDetailContainer
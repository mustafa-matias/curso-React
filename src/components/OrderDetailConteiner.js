import { getOrderById } from '../services/Firebase';
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import OrdenDetail from './OrdenDetail';

const OrderDetailConteiner = () => {
    let params = useParams();
    const [userOrder, setUserOrder] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            getOrderById(params.id).then((snapshot) =>{
                return setUserOrder( snapshot.data());
                })
            setLoading(false);
        }, 2000)
    }, [params.id])

    return (
        loading ? (
            <div className="lds-roller h-85"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        ) : (userOrder && <OrdenDetail id={params.id} order={userOrder}/>)
    )
}

export default OrderDetailConteiner;
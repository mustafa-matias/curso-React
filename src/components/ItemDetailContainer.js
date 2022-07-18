import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    let params = useParams();
    
    const [productoElegido, setProductoElegido] = useState();
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState();
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch(`https://fakestoreapi.com/products/${params.id}`)
                .then(res => res.json())
                .then(json => setProductoElegido(json))
                .catch((err)=>{
                    setErr("Ocurrio un error");
                })
            setLoading(false);
        },2000)},[params.id])
    
        return (
            loading ?(
                <div className="lds-roller vh-100"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    ):(productoElegido && <ItemDetail item={productoElegido}/>)
                    )
}       

export default ItemDetailContainer
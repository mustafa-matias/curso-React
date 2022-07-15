import React, {useState, useEffect} from "react";
import ItemDetail from "./ItemDetail";
import products from "./products.json";

const producto1 = products[0];

const ItemDetailContainer = () => {
    
    const [productoElegido, setProductoElegido] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=>{
        const getItem = new Promise (function(resolve){
            setTimeout(()=>{
                resolve(producto1);
            },2000)
        })
        getItem.then(function(producto){
                setProductoElegido(producto);
            })
            setTimeout(()=>{
                setLoading(false);
            },2000)
                
        })

        return (
            loading ?(
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    ):(<ItemDetail item={productoElegido}/>)
                    )
}       

export default ItemDetailContainer
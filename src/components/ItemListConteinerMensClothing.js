import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

const ItemListConteinerMensClothing = ({greeting}) =>{

const [loading, setLoading] = useState(true);
const [products,setProducts]=useState();
const [mensClothing,setMensClothing]=useState();
const [err, setErr] = useState();

useEffect(()=>{
    setTimeout(()=>{
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setMensClothing(products.filter(product=>product.category === "men's clothing"));
                })
            .catch((error)=>{
                setErr("Ocurrio un error");
            })
        setLoading(false);
    },2000)},[products])
    
    return (
    <div className="ItemListConteiner">
        <div className="text-light fs-3">
            {greeting}
        </div>
        {loading ?(
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            ): (mensClothing && <ItemList items={mensClothing}/> )
        }
    </div>);
}
export default ItemListConteinerMensClothing;
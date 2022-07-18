import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

const ItemListConteinerWomensClothing = ({greeting}) =>{

const [loading, setLoading] = useState(true);
const [products,setProducts]=useState();
const [womensClothing,setWomensClothing]=useState();
const [err, setErr] = useState();

useEffect(()=>{
    setTimeout(()=>{
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setWomensClothing(products.filter(product=>product.category === "women's clothing"));
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
            ): (womensClothing && <ItemList items={womensClothing}/> )
        }
    </div>);
}
export default ItemListConteinerWomensClothing;
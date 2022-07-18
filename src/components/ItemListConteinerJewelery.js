import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";

const ItemListConteinerJewelery = ({greeting}) =>{

const [loading, setLoading] = useState(true);
const [products,setProducts]=useState();
const [err, setErr] = useState();

useEffect(()=>{
    setTimeout(()=>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch((error)=>{
                setErr("Ocurrio un error");
            })
        setLoading(false);
    },2000)},[])

    
    return (
    <div className="ItemListConteiner">
        <div className="text-light fs-3">
            {greeting}
        </div>
        {loading ?(
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            ): (products && <ItemList items={products}/> )
        }
    </div>);
}
export default ItemListConteinerJewelery;
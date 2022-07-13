import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import products from "./products.json";

const ItemListConteiner = ({greeting}) =>{

const [loading, setLoading] = useState(true);

useEffect(()=>{
    setTimeout(()=>{
        setLoading(false);
    },2000)
},[])


    return (
    <div className="ItemListConteiner">
        {greeting}
        {loading ?(
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            ):(<ItemList items={products}/> )
        }
    </div>);
}
export default ItemListConteiner
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListConteiner = ({ greeting }) => {

    let params = useParams();
    console.log(params);
    console.log(params.idCategory);

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState();
    const [err, setErr] = useState();

    useEffect(() => {
        setTimeout(() => {
            if(params.idCategory){
                setLoading(true);
                fetch(`https://fakestoreapi.com/products/category/${params.idCategory}`)
                    .then(res => res.json())
                    .then(json => setProducts(json))
                    .catch((error) => {
                        setErr("Ocurrio un error");
                    }).finally(() => {
                        setLoading(false);
                    })
                }else{
                    setLoading(true);
                    fetch(`https://fakestoreapi.com/products/`)
                    .then(res => res.json())
                    .then(json => setProducts(json))
                    .catch((error) => {
                        setErr("Ocurrio un error");
                    }).finally(() => {
                        setLoading(false);
                })
            }
        }, 2000)
    }, [params.idCategory]);

    return (
        <div className="ItemListConteiner">
            <div className="text-light fs-3">
                {greeting}
            </div>
            {loading ? (
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            ) : (products && <ItemList items={products} />)
            }
        </div>);
}
export default ItemListConteiner
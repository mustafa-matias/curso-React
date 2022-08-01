import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./Firebase";
import ItemList from "./ItemList";

const ItemListConteiner = ({ greeting }) => {

    let { idCategory } = useParams();

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            getProducts(idCategory).then((snapshot) => {
                setProducts(
                    snapshot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() };
                    }
                    )
                );
            }
            )
            setLoading(false);
        }, 2000)
    }, [idCategory])

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
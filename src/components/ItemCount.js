import React, {useState} from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial);
    const incrementar =()=>{
        setCount((val)=>(val<stock?count+1:count));
    }
    const decrementar=()=>{
        setCount((val)=>(val>1?count-1:count));
    }

    return (
            <div>
                <div>
                    <button onClick={decrementar} className="btnCount"> - </button>
                    <span className='fw-bold fs-4'>{count}</span>
                    <button onClick={incrementar} className="btnCount">+</button>
                </div>
                <div>
                    <button onClick={()=>{
                        if(count<=stock){
                            onAdd(`Agregaste ${count} producto/s`);
                        }else{
                            onAdd("No hay stock disponible!");
                        }
                    }}
                    className="btnCarrito" ><span>Agregar</span></button>
                </div>
        </div>);
}

export default ItemCount
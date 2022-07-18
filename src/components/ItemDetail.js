import ItemCount from './ItemCount';
import Swal from 'sweetalert2';

const ItemDetail = ( {item} ) => {

function onAddAlert(n){
    Swal.fire({
        position: 'top-end',
        background: '#323232',
        color: '#fff',            
        icon: 'info',
        title: n,
        showConfirmButton: false,
        timer: 1500
        })
    }

return (
    <div className="contenedorDetalle  ">
            <div className="contenedorImgDetalle">
                <img className='imgDetalle' src={item.image} alt={item.title}/>
            </div>
            <div className="itemDetalle text-dark">
                <h3 className='fs-1'> {item.title} </h3>
                <p className="descripcionDetalle fs-4">{item.description}</p>
                <p className="precioDetalle fs-2"> ${item.price} </p>
                <ItemCount stock={5} initial={1} onAdd={onAddAlert}/>
            </div>
</div>

)
}

export default ItemDetail
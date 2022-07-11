import ItemCount from "./ItemCount";
import Swal from 'sweetalert2';


const Item = ({ id, title, description, price, image }) => {
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
        <div className="card bgNav">
            <div className="card2 text-light">
              <div className="d-flex justify-content-center">
                <p> {id} </p>
                <h3> {title} </h3>
              </div>
              <p>{description}</p>
                <p> ${price} </p>
                <img src={image} alt={title} width="100"/>
              <ItemCount stock={5} initial={1} onAdd={onAddAlert}/>
            </div>
        </div>
  )
}

export default Item;
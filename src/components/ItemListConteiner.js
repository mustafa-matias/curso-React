import ItemCount from "./ItemCount";
import Swal from 'sweetalert2';

const ItemListConteiner = ({greeting}) =>{
    return (<div className="ItemListConteiner">
        {greeting}
        <ItemCount stock={5} initial={1} onAdd={(n)=>{
            Swal.fire({
            position: 'top-end',
            background: '#323232',
            color: '#fff',            
            icon: 'info',
            title: n,
            showConfirmButton: false,
            timer: 1500
            })
        }}/>
    </div>);
}

export default ItemListConteiner
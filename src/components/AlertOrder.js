import Swal from 'sweetalert2';

const AlertOrder = () => {
        Swal.fire({
            position: 'top-end',
            background: '#323232',
            color: '#fff',
            icon: 'info',
            title: `Compra realizada de forma correcta.`,
            showConfirmButton: false,
            timer: 1500
        })
}

export default AlertOrder
import Swal from 'sweetalert2';

const AlertOrder = () => {
        Swal.fire({
            position: 'top-end',
            background: '#323232',
            color: '#fff',
            icon: 'info',
            title: `Successfully purchased.`,
            showConfirmButton: false,
            timer: 1500
        })
}

export default AlertOrder
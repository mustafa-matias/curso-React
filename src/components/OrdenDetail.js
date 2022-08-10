import { Link } from "react-router-dom";

const OrdenDetail = ({ id, order }) => {
    return (
        <div className="text-light contenedorOrderDetail">
            <div>
                <p>SU ORDEN FUE PROCESADA DE FORMA CARRECTA</p>
                <p>Id #{id} </p>
            </div>
            <p>Datos del Comprador</p>
            <div>
                <p>Nombre: {order.buyer.name.nameOrder} </p>
                <p>E-mail: {order.buyer.email.email} </p>
                <p>Phone: {order.buyer.phone.phone} </p>
            </div>
            <div>
                <p>Total a pagar: ${order.total.precioTotal} </p>
            </div>
            <Link to="/">
                <button type="reset" className="btn btn-danger w-25 mx-1 mt-4 m-2 bg-danger">Volver al Inicio</button>
            </Link>
        </div>
    )
}

export default OrdenDetail
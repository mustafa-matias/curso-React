import { Link } from "react-router-dom";

const OrdenDetail = ({ id, order }) => {
    return (
        <div className="text-light bg-dark contenedorOrderDetail">
            <div className="border border-dark">
                <div className="border border-light">
                    <p className="bg-success">Successfully purchased</p>
                    <p className="">Order: #{id} </p>
                </div>
                <div className="mt-4 border border-light">
                    <p className="bg-secondary">Buyer information</p>
                    <div className="d-flex justify-content-around p-2">
                        <span>Name: {order.buyer.name.nameOrder} </span>
                        <span>Phone: {order.buyer.phone.phone} </span>
                        <span >E-mail: {order.buyer.email.email} </span>
                    </div>
                </div>
                <div className="mt-4 border border-light bg-secondary">
                    <p className="pt-2 text-dark fw-bold">Total: ${order.total.precioTotal} </p>
                </div>
                <Link to="/">
                    <button type="reset" className="btn btn-danger w-25 mx-1 mt-4 m-2 bg-danger">Home</button>
                </Link>
            </div>
        </div>)
}

export default OrdenDetail
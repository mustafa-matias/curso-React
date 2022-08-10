import { useNavigate  } from 'react-router-dom';
import React, { useState } from 'react';
import { sendOrder } from "../services/Firebase";
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import AlertOrder from './AlertOrder';



const Form = () => {
    const [nameImput, SetImputName] = useState();
    const [emailImput, SetImputEmail] = useState();
    const [phoneImput, SetImputNumber] = useState();
    const { productosAgregados, totalPrice, clearAll, idOrder } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <form className="m-1 mt-3 text-light">
            <p className="text-light ">DATOS COMPRADOR</p>
            <div className="form-group fst-italic border border-light p-2 ">
                <div>
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(event) => SetImputName(event.target.value)} id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div className="d-flex justify-content-around">
                    <div className="w-50 me-2">
                        <label htmlFor="exampleInputPhone" className="form-label mt-2">Phone Number</label>
                        <input type="number" className="form-control" onChange={(event) => SetImputNumber(event.target.value)} id="exampleInputPhone" aria-describedby="emailHelp" placeholder="Enter Phone Number" />
                    </div>
                    <div className="w-50 ms-2">
                        <label htmlFor="exampleInputEmail1" className="form-label mt-2">Email address</label>
                        <input type="email" className="form-control" onChange={(event) => SetImputEmail(event.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                </div>
                <div className="d-flex">
                    <button type="reset" className="btn btn-danger w-25 mx-1 mt-4 m-2 bg-danger"
                    >Limpiar Formulario</button>
                    <button type="submit" className="btn btn-success w-75 mx-1 mt-4 m-2 bg-success" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        onClick={(e) => {
                            e.preventDefault();
                            sendOrder(nameImput, emailImput, phoneImput, productosAgregados, totalPrice)
                                .then(({ id }) => {
                                    clearAll();
                                    AlertOrder()
                                    navigate('/order/' + id)
                                });
                        }}
                    >Finaliza Compra</button>
                </div>
            </div>
        </form>
    )
}

export default Form
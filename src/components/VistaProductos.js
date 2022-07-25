const VistaProductos = (carrito) => {
    console.log(carrito);
    return (
        <div className='bg-danger'>
            {carrito.map&&((producto) => (
                <div key={producto.id} >{producto.title}  </div>
            ))}
        </div>
    )
}

export default VistaProductos
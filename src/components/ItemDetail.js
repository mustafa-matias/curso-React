const ItemDetail = ( {item} ) => {
  return (
<div className="card bgNav">
    <div className="card2 text-light ">
        <div className="gridDetalle">
            <div className="imgDetalle">
                <img src={item.image} alt={item.title} width="45%"/>
            </div>
            <div className="titleDetalle">
                <p> {item.id} </p>
                <h3> {item.title} </h3>
            </div>
            <p className="descripcionDetalle">{item.description}</p>
            <p className="precioDetalle"> {item.price} </p>
        </div>
    </div>
</div>
)
}

export default ItemDetail
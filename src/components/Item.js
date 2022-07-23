import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ id, title, description, price, image }) => {

  return (
    <Card className="contenedorCard m-3" style={{ width: '18rem' }}>
      <div className="contenedorImgCard">
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body className="contenedorCuerpoCard">
        <Card.Text>${price}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Link to={'/item/' + id}>
          <Button variant="dark">Detail</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item;
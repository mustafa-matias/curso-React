import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return (<nav className="navbar navbar-expand-lg navbar-dark bgNav borderNav"><div className="container-fluid">
    <Link to='/' className="navbar-brand" >Store 🛍</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active linkNav">Home
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to='/category/womensclothing' className="nav-link" >Women's Clothing</Link>
        </li>
        <li className="nav-item">
          <Link to='/category/mensclothing' className="nav-link" >Men's Clothing</Link>
        </li>
        <li className="nav-item">
          <Link to='/category/electronics' className="nav-link" >Electronics</Link>
        </li>
        <li className="nav-item">
          <Link to='/category/jewelery' className="nav-link" >Jewelery</Link>
        </li>
      </ul>
    </div>
  </div>
  <CartWidget/>
</nav>
);}

export default NavBar
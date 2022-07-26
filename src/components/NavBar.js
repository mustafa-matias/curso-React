import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bgNav borderNav"><div className="container-fluid">
    <NavLink to='/' className="navbar-brand" >Store 🛍</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink to="/" className={
            ({ isActive }) => isActive ? "nav-link text-light" : "nav-link"
          }>Home
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/women's%20clothing" className={
            ({ isActive }) => isActive ? "nav-link text-decoration-underline text-light" : "nav-link"
          }>Women's Clothing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category/men's%20clothing" className={
            ({ isActive }) => isActive ? "nav-link text-decoration-underline text-light" : "nav-link"
          }>Men's Clothing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/category/electronics' className={
            ({ isActive }) => isActive ? "nav-link text-decoration-underline text-light" : "nav-link"
          }> Electronics</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/category/jewelery' className={
            ({ isActive }) => isActive ? "nav-link text-decoration-underline text-light" : "nav-link"
          }> Jewelery</NavLink>
        </li>
      </ul>
    </div>
  </div>
    <CartWidget />
  </nav>
  );
}

export default NavBar
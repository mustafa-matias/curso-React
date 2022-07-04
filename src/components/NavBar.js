const NavBar = () =>{
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark"><div className="container-fluid">
    <a className="navbar-brand" href="#">Store 🛍</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active linkNav" href="">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Ofertas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Nosotros</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);}

export default NavBar
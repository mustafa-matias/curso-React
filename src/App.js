import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (
    <div className="App bgNav">
      <NavBar/>
      <ItemListConteiner greeting="Bienvenido a tu Store"/>
    </div>
  );
}

export default App;

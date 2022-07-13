import './App.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App bgNav">
      <NavBar/>
      <ItemDetailContainer/>
      <ItemListConteiner greeting="Bienvenido a tu Store"/>
    </div>
  );
}

export default App;

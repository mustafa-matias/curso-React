import './App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {

  return (
    <div className="App bgNav d-flex flex-column vh-100">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

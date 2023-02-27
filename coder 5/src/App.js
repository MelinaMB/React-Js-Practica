import { Navbar } from './components/Navbar/Navbar';
import {ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contador } from './components/Contador'
function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola mundo" />

      <Contador />

      
    </div>
  );
}

export default App;

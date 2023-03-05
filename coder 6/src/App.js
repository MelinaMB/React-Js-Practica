import { Navbar } from './components/Navbar/Navbar';
import {ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contador } from './components/Contador'
import { useState} from "react"


function App() {
  const [show, setShow] = useState(true)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Hola mundo" />
      <button onClick={handleShow} className="btn btn-danger">Mostrar contador</button>

      {
        show ? <Contador /> : null
      }
      
    </div>
  );
}

export default App;

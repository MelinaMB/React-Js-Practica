// import Nticias from './components/Noticias'
import { Noticias } from './components/Noticias';
import { Propiedades} from './components/Propiedades';


function App() {
  

  return (
    <div>
      <h2>Hola mundo</h2>
      <hr/>
      <Noticias />
      <Propiedades nombre="Melina" curso="react" edad={28}/>
      <Propiedades nombre="Pablo" curso="java" edad={28}/>
    </div>
  );
}

export default App;

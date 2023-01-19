import './App.css';
import Informacion from './Informacion/Informacion'

function App() {
  return (
     <>
     <Informacion nombre="Doe, Jane" edad={45} color="Black"></Informacion>
     <Informacion nombre="Smith, John" edad={88} color="Brown"></Informacion>
     
     </>
  );
}

export default App;

import './App.css';
import Boton from "./COMPONENTES/boton";
import Contador from "./COMPONENTES/contador";
import { useState } from 'react';

function App() {

  const [ numClics, setNumClics ] = useState(0);

  const manejarClic = () =>  {
    setNumClics(numClics + 1 );
  }
  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <><div className="App">
      <h1 className="Titulo">PROYECTO CONTADOR</h1>
      <div className='Contenedor-principal'>
      < Contador numClics= {numClics} />

        <Boton texto="clic"
          botonDeClic={true}
          manejarClic={manejarClic} />

        <Boton texto="reiniciar"
          botonDeClic={false}
          manejarClic={reiniciarContador} />

      </div>
    </div>

      </>
  );
}

export default App;

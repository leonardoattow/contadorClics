import React from "react";
import "../estilos/boton.css";

function Boton ({ texto, botonDeClic, manejarClic }){
    return (<button className={ botonDeClic ? "boton-clic" : "boton-reiniciar" } onClick= { manejarClic }>
{texto}
</button>)

};
export default Boton
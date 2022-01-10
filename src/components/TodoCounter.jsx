import React from "react";
import '../css/TodoCounter.css';

// const estilos = {//estilos en línea
//   color:'black',
//   backgroundColor: 'salmon',
//   font:'bold'
// };

export function TodoCounter({total, todosFinalizados}){
  return(
    <h2
      className="TodoCounter"
    >
      Completadas {todosFinalizados} de {total} tareas
    </h2>
  );
}
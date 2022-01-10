import React from 'react'
import '../css/CreateTodoButton.css';

export function CreateTodoButton() {
  const  onClickButton = (mensaje)=>{
    alert(mensaje);
  }

  return (
    <React.Fragment>
      <button
        className='CreateTodoButton'
        onClick={()=> (onClickButton("Se supone que va una ventana modal"))}
      >
        ➕
      </button>
    </React.Fragment>
  )
}

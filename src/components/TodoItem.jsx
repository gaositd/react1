import React from 'react';
import '../css/TodoItem.css';

export function TodoItem(props) {
  const onCompletado = (text) =>{
    alert(`completado ${text}`);
  }

  const onBorrado = (text) =>{
    alert(`Borrado ${text}`);
  }
  
  return (
    <li className='TodoItem'>
      <span
        className={`Icon Icon-check ${props.completado && 'Icon-check--active'}`}
        //onClick={()=>onCompletado(props.text)}
        onClick={props.onCompletado}
      >
        √👌 
      </span>
      <p className={`TodoItem-p ${props.completado && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        //onClick={()=>onBorrado(props.text)}
        onClick={props.onBorrado}
      >
        🗑
      </span>
    </li>
  )
}

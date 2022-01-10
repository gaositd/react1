import React from 'react';
import '../css/TodoList.css';

let i = 0;
export function TodoList(props) {
  i ++;
  return (
    
    <section>
      <ul>
        {props.children}
      </ul>
    </section>
  )
}

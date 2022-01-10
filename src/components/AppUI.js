import React from 'react';
import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';

export function AppUI({
  totalTodos,
  todosCompletados,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeToDos,
  deleteTodo,
}) {

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        todosFinalizados = {todosCompletados}
      />

      <TodoSearch
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />

      <TodoList>
        {
          searchedTodos.map((todo) =>(
            <TodoItem
              key={todo.text}
              text={todo.text}
              completado={todo.completado}
              onCompletado={()=> {completeToDos(todo.text)}}//onCompletado esta en TodoItem.jsx
              onBorrado={()=>{deleteTodo(todo.text)}}       //onBorrado esta en TodoItem.jsx
            />
          ))
        }
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

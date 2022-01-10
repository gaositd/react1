import React,{Fragment, useState} from 'react'
import logo from './logo.svg';
import { AppUI } from './components/AppUI';
import { useLocalStorage }from './Hooks/locaStorageHook';

// const defaultTodos = [
//   {text: "comida mexicana", completado: false},
//   {text: "comida italiana", completado: true},
//   {text: "comida nacional", completado: true},
//   {text: "comida local", completado: true},
// ];


function App() {
  const [item, saveTodos] = useLocalStorage('TodosV1', []);

  // const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');
  const todosCompletados = item.filter(todo => !!todo.completado).length;
  const totalTodos = item.length;

  let searchedTodos = [];
  if(!searchValue.length > 0){
    searchedTodos = item;
  }else{
    searchedTodos = searchedTodos.filter(todo=>{
      const todoText = item.text.toLowerCase();
      const searchTetxt = searchValue.toLowerCase();
      return todoText.includes(searchTetxt);
    });
  }

  const completeToDos=(text)=>{
    const todoIndex = item.findIndex(todo => todo.text === text);
    const newTodos = [...item];
    // newTodos[todoIndex] = {
    //   text:todos[todoIndex].text,
    //   completado: true,
    //  }
    newTodos[todoIndex].completado = true;
    // setTodos(newTodos);
    saveTodos(newTodos);
  };

  const deleteTodo = (text)=>{
    const todoIndex = item.findIndex(todo => todo.text === text);
    const newTodos = [...item];
    newTodos.splice(todoIndex, 1);
    // setTodos(newTodos);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos = {totalTodos}
      todosCompletados = {todosCompletados}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos={ searchedTodos}
      completeToDos={completeToDos}
      deleteTodo={deleteTodo}
    />
  )
}

export default App;

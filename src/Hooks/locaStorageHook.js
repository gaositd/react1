import React, {useState} from "react";

function useLocalStorage(itemName, initialValue){
  
  //const [todos, setTodos] = useState(parseTodos);
  const locaStorageitem = localStorage.getItem(itemName);
  
  let parseItem;
  
  if(!locaStorageitem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parseItem = [];
  }else{
    parseItem = JSON.parse(locaStorageitem);
  }
  
  const [item, setItem] = useState(parseItem);

  const saveTodos = (newItem) =>{
    const todosString = JSON.stringify(newItem);
    localStorage.setItem(itemName, todosString);
    setItem(newItem);
  };
  return [{
    item,
    saveTodos,
  }];
}

export {
  useLocalStorage,
}
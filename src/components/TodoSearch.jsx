import React, {Fragment, useState} from 'react'
import '../css/TodoSearch.css';

export function TodoSearch({searchValue, setSearchValue}) {
  //const [searchValue, setSearchValue] = useState('');

  const onCambios = (event)=>{
    document.getElementById('span').innerText = event.target.value;
    setSearchValue(event.target.value);
  };

  return (
    <Fragment>
      <input
        placeholder="comida"
        className='TodoSearch'
        value={searchValue}
        onChange={onCambios}
        //onChange={()=>setSearchValue('nuevo Texto')}
      />
      <span className="span" id="span"> {searchValue}</span>
  </Fragment>
  )
}

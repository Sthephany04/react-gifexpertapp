import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['Dragon Ball']);

  // const handleAdd = () => {
  //   setCategories( [...categories, 'One Piece'] ); //Añadir un nuevo valor al arreglo
  //   //setCategories ( categories => [ ...categories, 'One Piece' ]) segunda forma de agregar un elemento a un arreglo
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories } />
      <hr/>

      <ol>
        { 
          categories.map( category => (             
            <GifGrid 
              key={ category }
              category={ category }
            />
          //return <li key={ category }>{ category }</li> 
          )) // el key es obligatorio, normalmente viene de una base de datos
        } 
      </ol>

    </>
  )
}

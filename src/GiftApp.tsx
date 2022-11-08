import { useState } from "react";
import { AddCategory } from './components/AddCategory';


export const GifApp = () => {

    const [category, setCategory] = useState([ 'Ducati Panigale v4', 'Yamaha R6' ]);      // Este arreglo será llamado por el .map para que aparezca
    
    const onAddCategory = ( onNewCategory:any ) => {                      // Para agregar una categoría de gits

      setCategory([ ...category, onNewCategory ]);                      //Toma la ultima impresión de category y le agrega el elemento newCategory
    };

    return (
      <>
          {/* Title */}
          <h1>Gif App</h1>
  
          {/* Input */}
          <AddCategory onNewCategory= { onAddCategory } />             {/* setCategory es una propiedad que contiene la función setCategory */}
  
          {/* Listado de Gifs */}
          <ol>
            { category.map( category => {                        // Barre cada uno de los elementos del arreglo y les da el valor de abajo
                return <li key={category}> {category} </li>      // Debo darle un key unico, como su identificador
            })}
          </ol>

            {/* Gift items */}
      </>
    )
  }
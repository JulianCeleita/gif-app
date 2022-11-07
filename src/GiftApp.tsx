import { useState } from "react";
import { AddCategory } from './components/AddCategory';


export const GifApp = () => {

    const [category, setCategory] = useState([ 'One Punch', 'Dragón' ]);      // Este arreglo será llamado por el .map para que aparezca
    
    const onAddCategory = ( ) => {                      // Para agregar una categoría de gits

        setCategory([ ...category, 'Valorant' ]);        //Toma la ultima impresión de category y le agrega el elemento valorant
    };

    return (
      <>
          {/* Title */}
          <h1>Gif App</h1>
  
          {/* Input */}
          <AddCategory setCategory={setCategory} />
  
          {/* Listado de Gifs */}
          <ol>
            { category.map( category => {                          // Barre cada uno de los elementos del arreglo y les da el valor de abajo
                return <li key={category}> {category} </li>      // Debo darle un key unico, como su identificador
            })}
          </ol>

            {/* Gift items */}
      </>
    )
  }
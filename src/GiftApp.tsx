import { useState } from "react";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifApp = () => {

    const [category, setCategory] = useState([ 'Ducati Panigale v4', 'Yamaha R6' ]);      // Este arreglo será llamado por el .map para que aparezca
    
    const onAddCategory = ( onNewCategory:any ) => {                    // Para agregar una categoría de gits

      const newCategoryLower = category.map(newCategoryLower => {
        return newCategoryLower.toLowerCase();
        });

      if (newCategoryLower.includes(onNewCategory.toLowerCase())) return;

      setCategory([ ...category, onNewCategory ]);                      //Toma la ultima impresión de category y le agrega el elemento newCategory
    };

    return (
      <>

          <h1>Gif App</h1>
  
          <AddCategory onNewCategory= { onAddCategory } />              {/* onNewCategory es una propiedad que contiene la función onAddCategory */}
  
          {
            category.map( category => (                                 // Barre cada uno de los elementos del arreglo y les da el valor de abajo
                <GifGrid 
                  key={category}                                        // Debo darle un key unico, como su identificador
                  category={category}
                />
            ))
          }   
      </>
    )
  }
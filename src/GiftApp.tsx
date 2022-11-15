import { useState } from "react";
import { AddCategory, GifGrid } from './components';      // Importo directamente desde el index que lo saca explicito cuando apunto a la carpeta donde está ubicado


export const GifApp = () => {

    const [category, setCategory] = useState([ 'Ferrari' ]);      // Este arreglo será llamado por el .map para que aparezca
    
    const onAddCategory = ( onNewCategory:any ) => {                    // Para agregar una categoría de gits

      const newCategoryLower = category.map(newCategoryLower => {
        return newCategoryLower.toLowerCase();
        });

      if (newCategoryLower.includes(onNewCategory.toLowerCase())) return;

      setCategory([ onNewCategory, ...category ]);                      //Toma la ultima impresión de category y le agrega el elemento newCategory
    };

    return (
      <>

          <h1>Gif App</h1>
  
          <AddCategory onNewCategory= { onAddCategory } />              {/* onNewCategory es una propiedad que contiene la función onAddCategory */}

          {
            category.map( (category, index:number) => (                                  // Barre cada uno de los elementos del arreglo y les da el valor de abajo
                <GifGrid 
                  key={`${ category }${ index }`}                                        // Debo darle un key unico, como su identificador
                  category={category}
                />
            ))
          }   
      </>
    )
  }
import { useState, useEffect } from 'react';
import { Image } from '../components/GifGrid';
import { getGifs } from '../helpers/getGifs';

// Hook = No es más que una función que regresa algo (return)

export const useFetchGifs = ( {category}:{category:string} ) => {

    const [ images, setImages ] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState( true);      // El isLoading va a ser true antes de cargar las images

    const getImages = async() => {
        const newImages = await getGifs(category);      // la constante newImages tendrá los elementos de category arrojados por la función de getGifs
        setImages(newImages);                           // setImages ahora toma el valor arrojado por nnewImages
        setIsLoading( false );                          // Como la imagen ya cargó arriba, el isloading se vuelve falso
    }

    useEffect( () => {                                  // useEffect dispara efectos secundarios: cuando el componente se renderiza, quiero generar tal efecto. Cuando la función cambia, quiero generar tal efecto...etc.
        getImages();                                    // Incluyo ya las images en el useEffect
    }, [])                                              // Si [] lo dejo vacío, va a cargar el componente en consola solo la primer vez cuando se construye 
 

  return {
    images,                                             // Envio las images que saqué
    isLoading,                                          // Mando el resultado a ver si está cargando o no la imagen
  }
}

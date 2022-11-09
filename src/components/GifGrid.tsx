import { useEffect, useState } from 'react';
import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';

// Ejecutamos el funcional component pero no debe ir dentro ninguna petición de http porque sino va a ocupar mucho espacio en memoria al estarla pidiendo

export const GifGrid = ( {category}:{category:any} ) => {           // Va a arrojar el valor de category hacia el main

    const [ images, setImages ] = useState([]);

    const getImages = async() => {
        const newImages = await getGifs(category);      // la constante newImages tendrá los elementos de category arrojados por la función de getGifs
        setImages(newImages);                           // setImages ahora toma el valor arrojado por nnewImages
    }

    useEffect( () => {                                  // useEffect dispara efectos secundarios: cuando el componente se renderiza, quiero generar tal efecto. Cuando la función cambia, quiero generar tal efecto...etc.
        getImages();                                    // Incluyo ya las images en el useEffect
    }, [])                                              // Si [] lo dejo vacío, va a cargar el componente en consola solo la primer vez cuando se construye 

    return (
        <>
            <h3> {category} </h3>
            <div className='card-grid'>
                {
                    images.map( ( image ) => (                //Hago un arreglo de image y desestructuro sacando el id y el title
                        <GifItem 
                            key={ image.id }
                            { ...image }                     // Esparcimos las props como title, id, url, para que puedan ser tomadas de cualquier lado 
                        /> 
                    ))
                }
            </div>
            
        </>
    )
}

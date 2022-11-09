import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

// Ejecutamos el funcional component pero no debe ir dentro ninguna petición de http porque sino va a ocupar mucho espacio en memoria al estarla pidiendo

export const GifGrid = ( {category}:{category:any} ) => {           // Va a arrojar el valor de category hacia el main

    useEffect( () => {                              // useEffect dispara efectos secundarios: cuando el componente se renderiza, quiero generar tal efecto. Cuando la función cambia, quiero generar tal efecto...etc.
        getGifs( category );                        // Recibo la category y ejecuto una sola vez la función para que me traiga los gifs y los meta en la category

    }, [] )                                         // Si [] lo dejo vacío, va a cargar el componente en consola solo la primer vez cuando se construye 


    return (
        <>
            <h3> {category} </h3>
        </>
    )
}

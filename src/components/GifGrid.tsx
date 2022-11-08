import { getGifs } from '../helpers/getGifs';

// Ejecutamos el funcional component pero no debe ir dentro ninguna petición de http porque sino va a ocupar mucho espacio en memoria al estarla pidiendo

export const GifGrid = ( {category}:{category:any} ) => {           // Va a arrojar el valor de category hacia el main

    getGifs( category );                        // Recibo la category y ejecuto una sola vez la función

    return (
        <>
            <h3> {category} </h3>
        </>
    )
}

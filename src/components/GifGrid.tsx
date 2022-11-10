import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

// Ejecutamos el funcional component pero no debe ir dentro ninguna petición de http porque sino va a ocupar mucho espacio en memoria al estarla pidiendo

export const GifGrid = ( {category}:{category:any} ) => {           // Va a arrojar el valor de category hacia el main

    const { images, isLoading } = useFetchGifs( category );         // Importo el hook creado y le saco las images y el isLoading


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

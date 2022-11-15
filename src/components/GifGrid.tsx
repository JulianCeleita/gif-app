import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export interface Image { 
    title: any; 
    url: any; 
    id: any; 
}

// Ejecutamos el funcional component pero no debe ir dentro ninguna petición de http porque sino va a ocupar mucho espacio en memoria al estarla pidiendo

export const GifGrid = ( {category}:{category:string} ) => {           // Va a arrojar el valor de category hacia el main

    const { images, isLoading } = useFetchGifs( {category} );         // Importo el hook creado y le saco las images y el isLoading


    return (
        <>
            <h3> {category} </h3>

            {
                isLoading && ( <h2> Loading... </h2> )              //significa: si isLoading es true, entonces ejecute la parte del código después del &&, si isLoading es false: no ejecutar el resto
            }

            <div className='card-grid'>
                {
                    images.map( ( image:Image ) => (                //Hago un arreglo de image y desestructuro sacando el id y el title
                        <GifItem 
                            key={ image.id }
                            { ...image }                            // Esparcimos las props como title, id, url, para que puedan ser tomadas de cualquier lado 
                        /> 
                    ))
                }
            </div>
            
        </>
    )
}

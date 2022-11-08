
// Hacemos aquí la petición del http y arrojamos solo el valor del gif

export const getGifs = async( category: any ) => {         // Recibo la categoría para manejar sus valores

    const url = `https://api.giphy.com/v1/gifs/search?api_key=tVEBUWNMHylW3BlcvXAKA5ASTaXn7iQm&q=${ category }&limit=20`;    //Al final del buscador tendrá la category que estamos buscando y el limite de imagenes que quiero aparezcan
    const resp = await fetch ( url );                      // fetch = traer algo, traeme el url
    
    const { data } = await resp.json();                    // Desestructuro la data que es lo que me arrojó el postman, y los datos van a estar en el resp.json

    const gifs = data.map( (img: { id: any; title: any; url:any; images:any }) => ({        // Creamos el arreglo que arrojará las imgs
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,               // Extraemos el url del objeto images y lo sacamos a la img
    }))
    console.log( gifs );
    return gifs;                                            // Retorno el arreglo de gifs con sus elementos del objeto
}

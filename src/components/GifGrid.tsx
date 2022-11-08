

export const GifGrid = ( {category}:{category:any} ) => {           // Va a arrojar el valor de category hacia el main

    const gifs:string[] = []

    return (
        <>
            <h1> {category} </h1>
            {
                gifs.map( gif => (              // Tomo el arreglo de gifs y voy a tener el valor de gif con su /p contenido
                    <p> { gif } </p>            // Un parrafo que va a tener el arreglo de los Gifs de arriba
                ))
            }
        </>
    )
}

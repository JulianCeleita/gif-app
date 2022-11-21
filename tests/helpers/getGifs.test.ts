import { describe, test, expect } from '@jest/globals';
import { getGifs } from '../../src/helpers/getGifs';

describe ( ' Test in getGifs ', () => {
    test('Must show an array with gifs', async() => {       // Voy a evaluar una función asincrona

        const gifs =await getGifs('Maserati');

        expect ( gifs.length ).toBeGreaterThan(0);        // Espero que el largo del arreglo de gifs sea mayor que 0 para que sea válido
        expect ( gifs[0] ).toEqual ({                       // Al elemento 0 de gifs debo ver que tenga en ID, title y URL cualquier valor de tipo string,
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any(String)
        })
     });
});
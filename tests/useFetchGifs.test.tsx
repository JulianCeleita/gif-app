import React from 'react'; 
import { describe, test, expect } from '@jest/globals';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../src/hooks/useFetchGifs';

// Evaluamos los hooks basandonos en su retorno, en este caso basandonos en el images y el isLoading

describe ( 'Test in the hook useFetchGifs', ()=>{

    test('Should return the initial state', () => { 

        // En el estado inicial esperariamos que no haya ninguna imagen y que esté cargando es el loaging...
        
        const { result} = renderHook( ()=> useFetchGifs('Yamaha'));     // Quiero obtener el resultado del hook.  Render Hook para hooks personalizados, voy a llamar dentro una función que me traiga la categoria yamaha.
        const { images, isLoading} = result.current;                    // Del resultado obtenido (obtuvo un arreglo vacio de imagenes y un isLoadingtrue) quiero tomar las iamges y el isLoading

        expect ( images.length).toBe(0);                    // La cantidad de imagenes debe ser 0 porque es el estado inicial
        expect ( isLoading ).toBeTruthy();                  // isLoading debe ser verdadero

    });

    test('Should return an images array and isLOading is false', async() => {
        const { result } = renderHook( ()=> useFetchGifs('Yamaha'));        //  Renderizamos el componente
        
        await waitFor (                                     // Espero que el largo de imagenes actuales sea mas grande que 0, si no no siga con el resto
            ()=> expect( result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;       // Obtengo el resultado de images y el isLoading

        expect( images.length ).toBeGreaterThan(0);         // imagenes > 0
        expect( isLoading ).toBeFalsy();                    // isloading = false

    });    

})
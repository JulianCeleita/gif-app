import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe ('Test in <AddCategory/>', () => {
    test('Must change the value in the input', () => { 

        // 1 PASO se crea sujeto de pruebas:
        render ( <AddCategory onNewCategory={ () => {} } />)        // Le indico que estoy tomando una función del onNewCategory
        
        // 2 PASO extraemos el input que lo buscamos por rol como textbox
        const input = screen.getByRole('textbox') as HTMLInputElement;

        // 3 PASO disparamos el evento
        fireEvent.input( input, { target: { value: 'Saitama'}});

        // 4 PASO que esperamos luego de que se dispara el evento?
        expect (input.value).toBe( 'Saitama' );
    })
})
import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe ('Test in <AddCategory/>', () => {
    test('Must change the value in the input', () => { 

        const inputValue = 'Ducati';

        // 1 PASO se crea sujeto de pruebas:
        render ( <AddCategory onNewCategory={ () => {} } />)         // Le indico que estoy tomando una función del onNewCategory
        
        // 2 PASO extraemos el input que lo buscamos por rol como textbox
        const input = screen.getByRole('textbox') as HTMLInputElement;

        // 3 PASO disparamos el evento
        fireEvent.input( input, { target: { value: inputValue}});     // A que elemento quiero aplicarle el evento de input? al input y va a buscar el valor en el target

        // 4 PASO que esperamos luego de que se dispara el evento?
        expect (input.value).toBe( 'Ducati' );
    })

    test('Must call onNewCategory if the input has a value', () => {    // Evaluando la función de OnSubmit 

        const inputValue = 'Ducati';

        render ( <AddCategory onNewCategory={ () => {}} />);

        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form') as HTMLFormElement;

        fireEvent.input( input, { target: { value: inputValue }});
        fireEvent.submit( form );                   // A que quiero aplicarle el submit? al form

        expect( input.value ).toBe('');

    })
})
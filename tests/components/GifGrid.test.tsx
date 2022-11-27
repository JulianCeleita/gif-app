import React from 'react';
import { describe, expect, jest, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');              // Que haga un mock desde esa dirección

describe ( 'Test in <GifGrid/>', () => {

    const category = 'OnePunch';

    test('Must show the loading initially', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render (<GifGrid category={category} />);
        expect ( screen.getByText( 'Loading...' ))
        expect ( screen.getByText( category ))
    })

    test ( 'Must show item when the useFetchGifs images are loaded', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Yamaha',
                url: 'http://localhost/yamaha.jpg'
            },
            {
                id: 'CDE',
                title: 'Benelli',
                url: 'http://localhost/benelli.jpg'
            }
    ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={category} /> );
        expect( screen.getAllByRole('img').length).toBe(2);

    })



})
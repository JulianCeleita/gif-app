import { describe, expect, test } from '@jest/globals';
import { GifGrid } from '../../src/components/GifGrid';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe ( 'Test in <GifGrid/>', () => {

    const category = 'OnePunch';

    test('Must show the loading initially', () => { 

        render (<GifGrid category={category} />);
        expect ( screen.getByText( 'Loading...' ))
        expect ( screen.getByText( category ))
    })

    test ( 'Must show item when the useFetchGifs images are loaded', () => {

    })



})
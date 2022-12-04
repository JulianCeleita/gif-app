import React from 'react';
import {describe, expect, test} from '@jest/globals';
import { render } from '@testing-library/react';
import { GifApp } from '../../src/GifApp';

describe ('Test in <GifApp/>', ()=> {

    test('Should match the snapshot', () => {

        const { container } = render( <GifApp/> );
        expect( container ).toMatchSnapshot();

    });
})
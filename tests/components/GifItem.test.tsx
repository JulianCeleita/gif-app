import {describe, expect, test} from '@jest/globals';
import { render } from '@testing-library/react';
import React from 'react';
import { GifItem } from '../../src/components/GifItem';

describe ( 'Test in <GitItem/>', () => {
    test('must match the snapshot ', () => {
        const title = 'Saitama';
        const url = 'https://one-punch.com/saitama.jpg';
        const id = '2';
        
        const { container } = render( <GifItem title={title} url={url} id={id} /> );
        expect( container ).toMatchSnapshot();
    })
} )


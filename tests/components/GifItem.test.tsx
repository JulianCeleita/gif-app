import {describe, expect, test} from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { GifItem } from '../../src/components/GifItem';

describe ( 'Test in <GitItem/>', () => {
    
    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';
    const id = '2';
        
    test('must match the snapshot ', () => {
        const { container } = render( <GifItem title={title} url={url} id={id} /> );
        expect( container ).toMatchSnapshot();
    });

    test ( 'Must show the image with the URL and the ALT indicated', ()=> {
        render( <GifItem title={title} url={url} id={id} /> );
        const { src, alt }= screen.getByRole('img') as HTMLImageElement;        //busco en el screen los datos del img y de allí saco a un contenedor el src y el alt        
        expect (src).toBe(url);                         // Alt: extrae el nombre src: extrae el url
        expect (alt).toBe(title);
    })

})


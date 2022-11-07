import { useState } from 'react';


export const AddCategory = ( {setCategory}:{setCategory:any} ) => {

    const [inputValue, setInputValue] = useState('Ducati Panigale')

    const onInputChange = ({target}:{target:any}) => {     // Va a arrojar el valor de target dentro del input
        console.log(target.value);
        setInputValue( target.value );          // Al poner un valor en input extraiga el valor y envielo como el target
    }

    const onSubmit = (event:any) => {           // Recibo el evento enviado por el formulario más abajo
        event.preventDefault();                 // Prevengo que se refresque la página al darle enter al input
        console.log(inputValue);                // Imprimo en pantalla el valor recibido en el input (este lo necesitaré para procesarlo)
        setCategory( (category: any) => [...category, inputValue] );
    }



  return (
    <form onSubmit={ (event) => onSubmit(event) }>     {/* Al darle submit envío el evento(una lista de caracteristicas que contiene tambien el target con un value(en este caso lo escrito en el input) a una función Onsubmit */}
        <input 
        type="text"
        placeholder="Buscar Gifs" 
        value={ inputValue }                    // Lo que se escribe en la casilla de input
        onChange= { onInputChange }             // Al cambiar el valor de la casilla ejecute la función - Permite que se escriba un nuevo valor en la casilla
        />
    </form>
  )
}

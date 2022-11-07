import { useState } from 'react';


export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('Ducati Panigale')

    const onInputChange = ({ target }) => {     // Va a arrojar el valor de target dentro del input
        console.log(target.value);
        setInputValue( target.value );          // Al poner un valor en input extraga el valor y envielo como target
    }

    const onSubmit = (event) => {               // Recibo el evento enviado por el formulario más abajo
        event.preventDefault();                 // Prevengo que se refresque la página al darle enter al input
        console.log(inputValue);                // Imprimo en pantalla el valor recibido en el input (este lo necesitaré para procesarlo)

    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>     {/* Al darle submit envío el evento(resultado del formulario) a una función Onsubmit */}
        <input 
        type="text"
        placeholder="Buscar Gifs" 
        value={ inputValue }                // Lo que se escribe en la casilla de input
        onChange= { onInputChange }         // Al cambiar el valor de la casilla ejecute la función
        />
    </form>
  )
}

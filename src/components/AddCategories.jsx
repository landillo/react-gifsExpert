import React from 'react'
import { useState } from 'react'

export const AddCategories = ({ onNewCategory }) => {
  
  const [inputValue, setInputVale] = useState('');
  
  const onInputChange = ( { target} ) => {
    
    setInputVale( target.value );
  }

  const onSubmit = ( event ) => { //funcion para insertar un valir en la lista de gifs tomando el valor desde el input

        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;   //validamos que el valor en el input no este vacio, que tengo al menos 2 caracteres
        
        // setCategories( categories => [ inputValue, ...categories ]); //agregamos el valor a la lista, poniendo el nuevo valor al principio de ella y tomando los que ya estaban despues
        onNewCategory( inputValue.trim() );
        setInputVale(''); //limpia el input del valor que acabamos de ingresar a la lista
  }
  
    return (
        <form onSubmit={ onSubmit } >

            <input  
                type='text'
                placeholder='Buscar Gifs'
                value={ inputValue }
                onChange={ onInputChange }
            />
     
        </form>
  )
}

import { useRef } from 'react'
export const FocusScreen = () => {

  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector('input').select();
    inputRef.current.select();
  }

  return(
  <>
    <h1> FocusScreen </h1>
    <hr />
    
    <input
      
      type='text'
      placeholder='Ingrese su nombre'
      className='form-control'
    />
    
    <input
      ref = { inputRef }
      type='text'
      placeholder='Ingrese su Correo '
      className='form-control mt-2'
    />
    
    <input 
      type='text'
      placeholder='Ingrese su Password '
      className='form-control mt-2'
    />

    <button className='btn btn-primary mt-2'
    onClick={ onClick }>
      Set focus
    </button>
  </>
  );

}
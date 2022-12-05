// Importaciones de react
import { useEffect } from 'react';

// Componente Funcional 
export const Message = () => {
  
  useEffect(() => {
    
    const onMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log( coords );
    }

    window.addEventListener( 'mousemove',onMouseMove )
    return () => {
      window.removeEventListener( 'mousemove', onMouseMove);
    }
  }, [] );

  return(
    <>
    <h3>El usuario ya existe</h3>
    </>
  );
};
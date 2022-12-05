// importacion de Estados
import { useEffect ,useState } from 'react';
// Importacion de componentes
import { Message } from './Message';


export const SimpleForm = () => {

  // hook de estado
  const [ formState, setFormState ] = useState({
    username: 'enrique',
    email: 'enrique@correo.com'
  });
  const {username, email} = formState;
  // /////////////////////////////////////////////

  const onInputChange = ({ target }) => {
  const { name, value } = target;
  // console.log({ name, value })
  setFormState({ ...formState, [ name ]: value })
  }


  //hook de useEffect 
  useEffect( ()=> {
    // console.log('useEffect called');
  }, []);

  useEffect( () => {
    // console.log('formState changed');
  }, [ username ]);
  
  useEffect( () => {
    // console.log('Email changed')
  }, [ email ])
  // //////////////////////////////////////

  
  return(
    <>
    <h1>Formulario Simple</h1>
    <hr />
    <input 
      type="text" 
      className='form-control'
      placeholder='Username'
      name='username'
      value={ username }
      onChange={ onInputChange }
      />

     {( username == 'enrique1') && <Message />}
      {/* <br /> */}

    <input 
    type= 'text'
    className='form-control mt-2'
    placeholder='email@correo.com'
    name='email'
    value={ email }
    onChange={ onInputChange }
    />
    </>
  );
};
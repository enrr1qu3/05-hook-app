// hook hecho a mano
import { useFetch } from '../hook/useFetch';

export const MultipleCustomHooks = () => {
    
  const { data, isLoading, hasError } = useFetch('https://www.breakingbadapi.com/api/');

  // https://www.breakingbadapi.com/api/quotes/1 cambiar cuando ya funcione

  // console.log({ data, isLoading, hasError });
  if(isLoading){
    return(<h1>Loading...</h1>)
  }
  
  return(     
  <>
    <h1>Breaking Quotes</h1>
    <hr />

    <div className='alert alert-info text-center'>
      Loading 
    </div>

    <blockquote className='blockquote text-end'>
      <p className='mb-1'>Hola mundo</p>
      <footer className='blockquote-footer'>Enrique alejo</footer>
    </blockquote>

  </>
  );
}
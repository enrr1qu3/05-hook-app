// hook hecho a mano
import { useCounter, useFetch } from '../hook';
//Importaciones de componentes 
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
    
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);

  // https://www.breakingbadapi.com/api/quotes/1 cambiar cuando ya funcione 
  
  // console.log({ data, isLoading, hasError });
  
  //para desestructurar un arreglo que tenga la posiblidad de entregar un null 
  const { author, quote } = !!data && data[0];
  ////////////////////////////////////////////////////////////////////////////

  // if(isLoading){
  //   return(<h1>Loading...</h1>)
  // }
  
  return(     
  <>
    <h1>Breaking Quotes</h1>
    <hr />
    { isLoading ? <LoadingQuote /> : <Quote quote={ quote } author={ author } /> }

    <button className='btn btn-primary' disabled = { isLoading }
     onClick={() => increment() }>
      Next quote
    </button>

  </>
  );
}
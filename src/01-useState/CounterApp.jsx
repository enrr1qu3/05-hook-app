// importacion de 
import { useState } from 'react';

export const CounterApp = () => {

  const [ state, setCounter ]= useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  } );

  const { counter1, counter2, counter3 } = state;

  // const [ { counter1, counter2, counter3 }, setCounter ]= useState({
  //   counter1: 0,
  //   counter2: 0,
  //   counter3: 0,
  // } );

  const sumar = () => {
    // setCounter( { counter1: counter1 + 1 ,
    //    counter2: counter2 + 2, counter3: counter3 +3 });
    // setCounter( { counter1: counter1 + 1, counter2, counter3});
    setCounter({ ...state, counter1: counter1 + 1  });
  }

  return(
    <>
    <h1>Counter 1: { counter1 } </h1>
    <h1>Counter 2: { counter2 } </h1>
    <h1>Counter 3: { counter3 } </h1>
      <hr />

    <button className='btn btn-primary' onClick={ sumar }>+1</button>

    </>
  );
}
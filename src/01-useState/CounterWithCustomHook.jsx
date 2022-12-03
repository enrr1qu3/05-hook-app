import { useCounter } from '../hook/useCounter';

export const CounterWithCustomHook = () => {

  const {counter, increment, decrement, reset} = useCounter();

  return (
    <>
    <h1>Counter with Custom Hook: { counter }</h1>
    < hr />

    <button className="btn btn-primary" onClick={ () => increment(2) }>+1</button>
    <button className="btn btn-danger" onClick={ reset }>Reset</button>
    <button className="btn btn-secondary" onClick={ () => decrement(2) }>-1</button>
    </>
  );
}
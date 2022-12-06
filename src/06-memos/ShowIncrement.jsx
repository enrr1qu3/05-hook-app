
import React from 'react'

export const ShowIncrement = ({ increment }) => {
    console.log('Me volvi a generr :c ');
  return (
    <button
    className='btn btn-primary'
    onClick={() => { increment(5); }}>
        Incrementar
    </button>
  )
}

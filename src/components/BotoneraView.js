import React from 'react';

const BotoneraView = ({dim, onCheck, play}) => {
  return (
    <div>
      <input  
        type="radio" defaultChecked 
        name="length" 
        onClick = {() => onCheck(10)}
      /> 10x10
      <input 
        type="radio" 
        name="length" 
        onClick = {() => onCheck(15)}
      /> 15x15
      <input 
        type="radio" 
        name="length" 
        onClick = {() => onCheck(20)}
      /> 20x20
      <button
        onClick = {() => play(dim)}
      >
        Dale!
      </button>
    </div>
  )
}

export default BotoneraView

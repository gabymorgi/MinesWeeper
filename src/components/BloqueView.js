import React from 'react';

const BloqueView = ({active, clase, valor, isBomb, onClick}) => {
  return (
    <td 
      className={clase}
      onClick = {() => {
        if (active) 
          onClick(isBomb);
      }}
    >
      {valor}
    </td>
  )
}

export default BloqueView

import React from 'react';
import Bloque from '../containers/Bloque';

const TableroView = ({dim}) => {
  return (
    <table>
      <tbody>
        {[...Array(dim)].map((act, f) => (
          <tr key={"fila" + f} className="board-row">
            {[...Array(dim)].map((act, c) => (
              <Bloque 
                key = {"f" + f + "c" + c}
                f = {f+1}
                c = {c+1} 
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
} 

export default TableroView

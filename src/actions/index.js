export const revelar = (fila, columna) => {
  return(
    {
      type: "REVELAR",
      fila,
      columna
    }
  )
}

export const play = (dim) => {
  let bombs=[];
  //pone el 20% del tablero como bombas
  for (let i = 0; i < dim*dim*0.2; i++){
    do{
      var isRepe = false;
      var bomb = Math.random()*dim*dim;
      for (let j = 0; j<bombs.length; j++){
        if (bomb === bombs[j])
          isRepe = true;
      }
      //se asegura que no sea repetido
    }while (isRepe)
    bombs.push(bomb)
  }
  bombs.sort(function(a, b){return a-b});
  return(
    {
      type: "PLAY",
      bombs: bombs,
      dim,
    }
  )
}

export const changeLength = (dim) => {
  return(
    {
      type: "CHANGE_LENGTH",
      dim
    }
  )
}

export const lose = () => {
  return(
    {
      type: "LOSE"
    }
  )
}

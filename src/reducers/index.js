const board = (state = null, action) => {
  let newState;
  switch (action.type){
    case "REVELAR":
      newState = state.map(function(arr) {
        return arr.slice();
      });
      let valor=0;
      //tiene en cuenta el desface
      for (let f=-1; f<=1; f++){
        for (let c=-1; c<=1; c++){
          if (state[action.fila + f][action.columna + c] === 'b')
            valor++;
        }
      }
      newState[action.fila][action.columna] = valor;
      return newState;
    case "PLAY":
      let dim = action.dim + 2;
      
      //crea un borde alrededor del tablero
      newState = new Array(dim)
      for (var f = 0; f < dim; f++){
        newState[f] = new Array(dim).fill('u');
      }
      
      for (let i=0; i<action.bombs.length; i++){
        let f = parseInt(action.bombs[i] / action.dim, 10);
        let c = parseInt(action.bombs[i] % action.dim, 10);
        newState[f + 1][c + 1] = 'b';
      }

      return newState;
    default: return state;
  }
};

const active = (state = false, action, board) => {
  switch (action.type){
    case 'PLAY':
      return true;
    case 'LOSE':
      console.log("perdi");
      return false;
    case 'REVELAR':
      for (let f = 1; f<board.length -1; f++){
        for (let c = 1; c<board[f].length -1; c++){
          if (board[f][c] === "u"){
            if (f !== action.fila || c !== action.columna)
              return true;
          }
        }
      }
      console.log("gane");
      return false;
    default:
      return state;
  }
}

const dim = (state = 10, action) => {
  switch (action.type){
    case 'PLAY':
      return action.dim;
    default: return state;
  }
}

const checkBox = (state = 10, action) => {
  switch (action.type){
    case 'CHANGE_LENGTH':
      return action.dim;
    default: return state;
  }
}

function minesStore(state = {}, action) {
  return {
    board: board(state.board, action),
    active: active(state.active, action, state.board),
    dim: dim(state.dim, action),
    checkbox: checkBox(state.checkbox, action)
  }
}

export default minesStore;

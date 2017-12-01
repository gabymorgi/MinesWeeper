import { connect } from 'react-redux';
import { revelar } from '../actions';
import { lose } from '../actions';
import BloqueView from '../components/BloqueView'

const mapStateToProps = (state, ownProps) => {
  if (state.board){
    let valor = state.board[ownProps.f][ownProps.c];
    let clase = '';
    let isBomb = false;
    let value = '';
    switch (valor)
    {
      case 'u': break;
      case 'b': 
        if (!state.active){
          clase = "bomb";
        }else{
          isBomb = true;
        }
        break;
      default: 
        clase= "active";
        value = valor;
    }
    return{
      clase: clase,
      valor: value,
      isBomb: isBomb,
      active: state.active,
      check: ownProps.check
    }
  }
  return{
    clase: '',
    valor: '',
    isBomb: false,
    active: state.active,
    check: ownProps.check
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (isBomb) => {
      if (isBomb === true){
        dispatch(lose());
      }else {
        dispatch(revelar(ownProps.f, ownProps.c))
      }
    }
  }
}

const Bloque = connect(
  mapStateToProps,
  mapDispatchToProps
)(BloqueView)

export default Bloque

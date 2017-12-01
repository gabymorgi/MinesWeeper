import { connect } from 'react-redux';
import { play } from '../actions';
import { changeLength } from '../actions';
import BotoneraView from '../components/BotoneraView'

const mapStateToProps = (state) => {
  return {
    dim: state.checkbox
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheck: (value) => {
      dispatch(changeLength(parseInt(value, 10)))
    },
    play: (dim) => {
      dispatch(play(dim))
    }
  }
}

const Botonera = connect(
  mapStateToProps,
  mapDispatchToProps
)(BotoneraView)

export default Botonera

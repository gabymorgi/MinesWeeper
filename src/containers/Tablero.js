import { connect } from 'react-redux';
import TableroView from '../components/TableroView'

const mapStateToProps = (state) => {
  return {
    dim: state.dim
  }
}

const Tablero = connect(
  mapStateToProps
)(TableroView)

export default Tablero

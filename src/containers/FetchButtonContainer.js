import { connect } from 'react-redux'
import FetchButton from '../components/FetchButton'
import buttonAction from '../actions/buttonAction';


const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    post: () => {
      dispatch(buttonAction())
    }
  }
}

const FetchButtonContainer = connect(mapStateToProps, mapDispatchToProps)(FetchButton)
export default FetchButtonContainer

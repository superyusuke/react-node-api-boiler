import { connect } from 'react-redux'
import PostButton from '../components/PostButton'
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

const PostButtonContainer = connect(mapStateToProps, mapDispatchToProps)(PostButton)
export default PostButtonContainer

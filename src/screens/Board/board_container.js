import { connect } from 'react-redux'
import Baord from './Board'
import {addNewSprintItem} from './../../actions/sprint'

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNewSprintItem: (userId,sprintItem) => dispatch(addNewSprintItem(userId,sprintItem))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Baord)

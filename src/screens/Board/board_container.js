import { connect } from 'react-redux'
import Baord from './Board'
import {addNewSprintItem,fetchSprintItems} from './../../actions/sprint'

function mapStateToProps (state) {
  return {
    sprintItems: state.sprint.sprintItems
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNewSprintItem: (userId,sprintItem) => dispatch(addNewSprintItem(userId,sprintItem)),
    fetchSprintItems: (userId) => dispatch(fetchSprintItems(userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Baord)

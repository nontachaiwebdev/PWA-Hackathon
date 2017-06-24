import { connect } from 'react-redux'
import Board from './Board'
import {addNewSprintItem,fetchSprintItems} from './../../actions/sprint'
import {logout} from './../../actions/app'

function mapStateToProps (state) {
  return {
    sprintItems: state.sprint.sprintItems
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNewSprintItem: (sprintItem) => dispatch(addNewSprintItem(sprintItem)),
    fetchSprintItems: () => dispatch(fetchSprintItems()),
    logout: () => dispatch(logout()) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

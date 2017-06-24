import { connect } from 'react-redux'
import AllBoard from './allBoard'
import {addNewCardItem, fetchCardItems} from './../../actions/card'
import {getSprintDataById} from './../../actions/sprint'

function mapStateToProps (state) {
  return {
    cardItems: state.sprint.cardItems,
    sprintItem: state.sprint.sprintItem
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNewCardItem: (sprintKey,cardItem) => dispatch(addNewCardItem(sprintKey,cardItem)),
    fetchCardItems: (sprintKey) => dispatch(fetchCardItems()),
    getSprintDataById: (sprintKey) => dispatch(getSprintDataById(sprintKey))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBoard)

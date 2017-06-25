import { connect } from 'react-redux'
import AllBoard from './allBoard'
import {addNewCardItem, fetchCardItems, updateCardItem} from './../../actions/card'
import {getSprintDataById} from './../../actions/sprint'
import {logout} from './../../actions/app'

function mapStateToProps (state) {
  return {
    cardItems: state.card.cardItems,
    sprintItem: state.sprint.sprintItem
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNewCardItem: (sprintKey,cardItem) => dispatch(addNewCardItem(sprintKey,cardItem)),
    fetchCardItems: (sprintKey) => dispatch(fetchCardItems(sprintKey)),
    getSprintDataById: (sprintKey) => dispatch(getSprintDataById(sprintKey)),
    updateCardItem: (sprintKey, cardId, updateData) => dispatch(updateCardItem(sprintKey, cardId, updateData)),
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBoard)

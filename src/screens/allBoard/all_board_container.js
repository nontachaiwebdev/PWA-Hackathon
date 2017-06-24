import { connect } from 'react-redux'
import AllBoard from './allBoard'
import {addNewCardItem,fetchCardItems} from './../../actions/card'

function mapStateToProps (state) {
  return {
    cardItems: state.sprint.sprintItems
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addNewCardItem: (sprintKey,cardItem) => dispatch(addNewCardItem(sprintKey,cardItem)),
    fetchCardItems: (sprintKey) => dispatch(fetchCardItems())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllBoard)

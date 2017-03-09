import { CHANGE_PROGRESS_BAR_VALUE } from '../constans/ToDoItems'


export default function reducerToDoProgressBar(state = { value: 0 }, action) {
  switch (action.type) {
    case CHANGE_PROGRESS_BAR_VALUE:
      return Object.assign({}, state, { value: action.value })
    default:
      return state
  }
}

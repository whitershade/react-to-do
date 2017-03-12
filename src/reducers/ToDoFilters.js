import { SET_VISIBILITY_FILTER, SHOW_ALL } from '../constants/ToDoFilters'

export default function reducerSetVisibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state;
  }
}

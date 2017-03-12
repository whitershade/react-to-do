import { SET_VISIBILITY_FILTER, SHOW_ALL } from '../constants/ToDoFilters'

export const initialState = SHOW_ALL

export default function reducerSetVisibilityFilter(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

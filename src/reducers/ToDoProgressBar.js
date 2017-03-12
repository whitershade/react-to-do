import * as types from '../constants/ToDoProgressBar'


export const initialState = {
  value: 0
}

export default function reducerToDoProgressBar(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_PROGRESS_BAR_VALUE:
      return { ...state, value: action.value }
    default:
      return state
  }
}

import * as constants from '../constants/ToDoItems'

export const initialState = [];

export default function reducerToDoItems(state = initialState, action) {
  switch (action.type) {
    case constants.ADD_TODO:
      return [ ...state, action.item ]

    case constants.MARK_TODO_AS_DONE:
      return state.map(item => {
        if(item.id === action.id) {
          return { ...item, completed: !item.completed }
        } else {
          return item
        }
      })

    case constants.MARK_TODO_AS_DELETED:
      return state.map(item => {
        if(item.id === action.id) {
          return { ...item, deleted: true }
        } else {
          return item
        }
      })

    case constants.RESTORE_DELETED_TODO:
      return state.map(item => {
        if(item.id === action.id) {
          return { ...item, deleted: false }
        } else {
          return item
        }
      })

    case constants.FINALLY_REMOVE_TODO:
      return state.filter(item => item.id !== action.id)

    case constants.FINALLY_REMOVE_ALL_DELETED_TODOES:
      return state.filter(item => item.deleted === false)

    default:
      return state;
  }
}

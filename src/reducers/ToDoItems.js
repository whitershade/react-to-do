import * as types from '../constants/ToDoItems'

export const initialState = [];

export default function reducerToDoItems(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return [ ...state, action.item ]

    case types.MARK_TODO_AS_DONE:
      return state.map(item => {
        if(item.id === action.id) {
          return { ...item, completed: !item.completed }
        } else {
          return item
        }
      })

    case types.MARK_TODO_AS_ONCHANGE: {
      return state.map(item => {
        if(item.id === action.id) {
          return { ...item, onChange: action.onChange }
        } else {
          return item
        }
      })
    }

    case types.MARK_TODO_AS_IMPORTANT: {
      return state.map(item => {
        if(item.id === action.id) {
          return { ...item, important: !item.important}
        } else {
          return item
        }
      })
    }

    case types.CHANGE_TO_DO_TEXT: {
      return state.map(item => {
        if(item.id === action.id) {
          return { ...item, text: action.text }
        } else {
          return item
        }
      })
    }

    case types.MARK_TODO_AS_DELETED:
      return state.map(item => {
        if(item.id === action.id) {
          return { ...item, deleted: true }
        } else {
          return item
        }
      })

    case types.RESTORE_DELETED_TODO:
      return state.map(item => {
        if(item.id === action.id) {
          return { ...item, deleted: false }
        } else {
          return item
        }
      })

    case types.FINALLY_REMOVE_TODO:
      return state.filter(item => item.id !== action.id)

    case types.FINALLY_REMOVE_ALL_DELETED_TODOES:
      return state.filter(item => item.deleted === false)

    default:
      return state;
  }
}

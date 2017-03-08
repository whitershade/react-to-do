import { ADD_TODO, MARK_TODO_AS_DONE, MARK_TODO_AS_DELETED, FINALLY_REMOVE_TODO, RESTORE_DELETED_TODO } from '../constans/ToDoItems'

export default function reducerToDoItems(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, action.item ]

    case MARK_TODO_AS_DONE:
      return state.map(item => {
        if(item.id !== action.id) {
          return item;
        } else {
          return Object.assign({}, item, { completed: !item.completed })
        }
      })

    case MARK_TODO_AS_DELETED:
      return state.map(item => {
        if(item.id === action.id) {
          return Object.assign({}, item, { deleted: true})
        } else {
          return item
        }
      })

    case RESTORE_DELETED_TODO:
      return state.map(item => {
        if(item.id === action.id) {
          return Object.assign({}, item, { deleted: false})
        } else {
          return item
        }
      })

    case FINALLY_REMOVE_TODO:
      return state.filter(item => item.id !== action.id)


    default:
      return state;
  }
}

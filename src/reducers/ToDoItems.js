import * as constans from '../constans/ToDoItems'

export default function reducerToDoItems(state = [], action) {
  switch (action.type) {
    case constans.ADD_TODO:
      return [ ...state, action.item ]

    case constans.MARK_TODO_AS_DONE:
      return state.map(item => {
        if(item.id !== action.id) {
          return item;
        } else {
          return Object.assign({}, item, { completed: !item.completed })
        }
      })

    case constans.MARK_TODO_AS_DELETED:
      return state.map(item => {
        if(item.id === action.id) {
          return Object.assign({}, item, { deleted: true})
        } else {
          return item
        }
      })

    case constans.RESTORE_DELETED_TODO:
      return state.map(item => {
        if(item.id === action.id) {
          return Object.assign({}, item, { deleted: false})
        } else {
          return item
        }
      })

    case constans.FINALLY_REMOVE_TODO:
      return state.filter(item => item.id !== action.id)

    case constans.FINALLY_REMOVE_ALL_DELETED_TODOES:
      return state.filter(item => item.deleted === false)

    default:
      return state;
  }
}

import { ADD_TODO, MARK_TODO, REMOVE_TODO } from '../constans/ToDoItems'

export default function page(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, action.item ]

    case MARK_TODO:
      return state.map(item => {
        if(item.id !== action.id) {
          return item;
        } else {
          return Object.assign({}, item, { completed: !item.completed })
        }
      })

    case REMOVE_TODO:
      return state.filter(item => item.id !== action.id)

    default:
      return state;
  }
}

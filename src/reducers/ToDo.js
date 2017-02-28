import { ADD_TODO, MARK_TODO } from '../constans/ToDo'

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

    default:
      return state;
  }
}

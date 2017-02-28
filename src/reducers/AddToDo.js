import { ADD_TODO } from '../constans/ToDo'

export default function page(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [ ...state, action.item ]

    default:
      return state;
  }
}

import { ADD_TODO } from '../constans/ToDo'

export function addToDo(item) {
  return {
      type: ADD_TODO,
      item
    }
}

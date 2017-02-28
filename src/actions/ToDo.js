import { ADD_TODO, MARK_TODO } from '../constans/ToDo'

export function addToDo(item) {
  return {
      type: ADD_TODO,
      item
    }
}

export function markToDo(id) {
  return {
    type : MARK_TODO,
    id
  }
}

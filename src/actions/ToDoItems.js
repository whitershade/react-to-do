import { ADD_TODO, MARK_TODO, REMOVE_TODO } from '../constans/ToDoItems'

export function addToDo(item) {
  return {
      type: ADD_TODO,
      item
    }
}

export function markToDo(id) {
  return {
    type: MARK_TODO,
    id
  }
}

export function removeToDo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

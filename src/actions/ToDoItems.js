import { ADD_TODO, MARK_TODO, REMOVE_TODO } from '../constans/ToDoItems'

export function actionAddToDo(item) {
  return {
      type: ADD_TODO,
      item
    }
}

export function actionMarkToDo(id) {
  return {
    type: MARK_TODO,
    id
  }
}

export function actionRemoveToDo(id) {
  return {
    type: REMOVE_TODO,
    id
  }
}

import { ADD_TODO } from '../constans/ToDoItems'

export function actionAddToDo(item) {
  return {
      type: ADD_TODO,
      item
    }
}

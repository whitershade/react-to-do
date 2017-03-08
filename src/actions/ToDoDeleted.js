import { SHOW_DELETED_TODOS } from '../constans/ToDoItems'

export function actionShowDeletedTodos(isShow) {
  return {
    type: SHOW_DELETED_TODOS,
    isShow
  }
}

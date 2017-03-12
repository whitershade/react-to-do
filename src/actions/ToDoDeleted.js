import { SHOW_DELETED_TODOS } from '../constants/ToDoItems'

export function showDeletedTodos(isShow) {
  return {
    type: SHOW_DELETED_TODOS,
    isShow
  }
}

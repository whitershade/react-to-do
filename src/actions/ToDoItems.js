import { MARK_TODO_AS_DONE, MARK_TODO_AS_DELETED, FINALLY_REMOVE_TODO } from '../constans/ToDoItems'


export function actionMarkToDoAsDone(id) {
  return {
    type: MARK_TODO_AS_DONE,
    id
  }
}

export function actionMakrToDoAsDeleted(id) {
  return {
    type: MARK_TODO_AS_DELETED,
    id
  }
}

export function actionFinallyRemoveToDo(id) {
  return {
    type: FINALLY_REMOVE_TODO,
    id
  }
}

import {
   MARK_TODO_AS_DONE,
   MARK_TODO_AS_DELETED,
   FINALLY_REMOVE_TODO,
   RESTORE_DELETED_TODO,
   FINALLY_REMOVE_ALL_DELETED_TODOES
 } from '../constans/ToDoItems'


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

export function actionRestoreToDo(id) {
  return {
    type: RESTORE_DELETED_TODO,
    id
  }
}

export function actionFinallyDeleteRemovedToDoes() {
  return {
    type: FINALLY_REMOVE_ALL_DELETED_TODOES
  }
}

import * as types from '../constants/ToDoItems'


export function addToDo(item) {
  return {
      type: types.ADD_TODO,
      item
    }
}

export function markToDoAsDone(id) {
  return {
    type: types.MARK_TODO_AS_DONE,
    id
  }
}

export function markToDoAsDeleted(id) {
  return {
    type: types.MARK_TODO_AS_DELETED,
    id
  }
}

export function finallyRemoveToDo(id) {
  return {
    type: types.FINALLY_REMOVE_TODO,
    id
  }
}

export function restoreToDo(id) {
  return {
    type: types.RESTORE_DELETED_TODO,
    id
  }
}

export function finallyDeleteRemovedToDoes() {
  return {
    type: types.FINALLY_REMOVE_ALL_DELETED_TODOES
  }
}

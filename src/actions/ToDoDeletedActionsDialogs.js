import { OPEN_FINALLY_DELETE_ALL_TODOES_DIALOG } from '../constants/ToDoDeletedActionsDialogs'

export function setFinallyDeleteDialogIsOpenState(isOpen) {
  return {
      type: OPEN_FINALLY_DELETE_ALL_TODOES_DIALOG,
      isOpen
    }
}

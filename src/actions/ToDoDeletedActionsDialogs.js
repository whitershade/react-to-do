import { OPEN_FINALLY_DELETE_ALL_TODOES_DIALOG } from '../constans/ToDoDeletedActionsDialogs'

export function actionSetFinallyDeleteDialogIsOpenState(isOpen) {
  return {
      type: OPEN_FINALLY_DELETE_ALL_TODOES_DIALOG,
      isOpen
    }
}

import { CHANGE_PROGRESS_BAR_VALUE } from '../constans/ToDoItems'

export function actionProgressBarChangeValue(value) {
  return {
      type: CHANGE_PROGRESS_BAR_VALUE,
      value
    }
}

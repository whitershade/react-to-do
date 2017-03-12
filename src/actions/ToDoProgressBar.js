import { CHANGE_PROGRESS_BAR_VALUE } from '../constants/ToDoProgressBar'

export function actionProgressBarChangeValue(value) {
  return {
      type: CHANGE_PROGRESS_BAR_VALUE,
      value
    }
}

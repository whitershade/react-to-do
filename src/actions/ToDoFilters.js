import { SET_VISIBILITY_FILTER } from '../constants/ToDoFilters'

export function actionSetVisibilityFilter(filter) {
  return {
      type: SET_VISIBILITY_FILTER,
      filter
    }
}

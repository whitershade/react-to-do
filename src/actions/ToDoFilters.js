import { SET_VISIBILITY_FILTER } from '../constans/ToDoFilters'

export function actionSetVisibilityFilter(filter) {
  return {
      type: SET_VISIBILITY_FILTER,
      filter
    }
}

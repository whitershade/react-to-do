import { LOCATION_CHANGE }                       from 'react-router-redux'
import { deletedPath }                           from '../constants/Routes'
import { OPEN_FINALLY_DELETE_ALL_TODOES_DIALOG } from '../constants/ToDoDeletedActionsDialogs'

export default function page(state = { DeletedToDoShow: false, finallyDeleteDialogIsOpen: false }, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return Object.assign({}, state, { DeletedToDoShow: action.payload.pathname ===  deletedPath })
    case OPEN_FINALLY_DELETE_ALL_TODOES_DIALOG:
      return Object.assign({}, state, { finallyDeleteDialogIsOpen: action.isOpen })
    default:
      return state;
  }
}

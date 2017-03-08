import { LOCATION_CHANGE }   from 'react-router-redux'
import { deletedPath }       from '../constans/Routes'

export default function page(state = { DeletedToDoShow: false }, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return Object.assign({}, state, { DeletedToDoShow: action.payload.pathname ===  deletedPath })
    default:
      return state;
  }
}

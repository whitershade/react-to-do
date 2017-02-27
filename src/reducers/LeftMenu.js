import { LEFT_MENU_IS_OPEN } from '../constans/LeftMenu'

const initialState = {
  isOpen: true
}

export default function page(state = initialState, action) {
  switch (action.type) {
    case LEFT_MENU_IS_OPEN:
      return { ...state,
              isOpen: !state.isOpen }

    default:
      return state;
  }

}

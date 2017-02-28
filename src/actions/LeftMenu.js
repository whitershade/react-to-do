import { LEFT_MENU_IS_OPEN } from '../constans/LeftMenu'

export function changeLeftMenuState(isOpen) {
  return {
      type: LEFT_MENU_IS_OPEN,
      isOpen
    }
}

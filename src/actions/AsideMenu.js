import { ASIDE_MENU_IS_OPEN } from '../constants/AsideMenu'

export function changeLeftMenuState(isOpen) {
  return {
      type: ASIDE_MENU_IS_OPEN,
      isOpen
    }
}

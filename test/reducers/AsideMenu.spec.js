import { LOCATION_CHANGE }       from 'react-router-redux'
import { REHYDRATE }             from 'redux-persist/constants'

import * as actions              from '../../src/actions/AsideMenu'
import * as types                from '../../src/constants/AsideMenu'

import reducer, { initialState } from '../../src/reducers/AsideMenu'


describe('AsideMenu reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).toEqual(initialState)
  })

  it(`should handle ${ types.ASIDE_MENU_IS_OPEN } and set true`, () => {
    expect(
      reducer({}, actions.changeLeftMenuState(true))
    ).toEqual({ isOpen: true })
  })

  it(`should handle ${ types.ASIDE_MENU_IS_OPEN } and set false`, () => {
    expect(
      reducer({}, actions.changeLeftMenuState(false))
    ).toEqual({ isOpen: false })
  })

  it(`should handle ${ REHYDRATE } and set false`, () => {
    expect(
      reducer({ isOpen: true}, { type: REHYDRATE })
    ).toEqual({ isOpen: false })
  })

  it(`should handle ${ LOCATION_CHANGE } and set false`, () => {
    expect(
      reducer({ isOpen: true }, { type: LOCATION_CHANGE })
    ).toEqual({ isOpen: false })
  })
})

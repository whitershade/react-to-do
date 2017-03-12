import reducer, { initialState } from '../../src/reducers/ToDoProgressBar'
import * as types                from '../../src/constants/ToDoProgressBar'
import * as actions              from '../../src/actions/ToDoProgressBar'

describe('ToDoProgressBar reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).toEqual(initialState)
  })

  it(`should set ${ types.CHANGE_PROGRESS_BAR_VALUE }`, () => {
    expect(
      reducer(initialState, actions.actionProgressBarChangeValue(10))
    ).toEqual({ value: 10 })
  })

  it(`should update ${ types.CHANGE_PROGRESS_BAR_VALUE }`, () => {
    expect(
      reducer({ value: 10 }, actions.actionProgressBarChangeValue(20))
    ).toEqual({ value: 20 })
  })
})

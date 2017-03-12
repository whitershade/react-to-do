import reducer, { initialState } from '../../src/reducers/ToDoItems'
import * as types                from '../../src/constants/ToDoItems'
import * as actions              from '../../src/actions/ToDoItems'

describe('ToDoItems reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(initialState, {})
    ).toEqual(initialState)
  })

  it(`should should handle ${ types.ADD_TODO } and add new item`, () => {
    expect(
      reducer(initialState, actions.addToDo({ id: 1 }))
    ).toEqual([ { id: 1 }])
  })

  it(`should handle ${ types.ADD_TODO } and add new item`, () => {
    expect(
      reducer([ {id: 1} ], actions.addToDo({ id: 2 }))
    ).toEqual([ { id: 1 }, { id: 2 }])
  })

  it(`should handle ${ types.MARK_TODO_AS_DONE }`, () => {
    expect(
      reducer([ { id: 1, completed: false }, { id: 2, completed: false } ], actions.markToDoAsDone(1))
    ).toEqual([ { id: 1, completed: true }, { id: 2, completed: false }])
  })

  it(`should handle ${ types.MARK_TODO_AS_DELETED }`, () => {
    expect(
      reducer([ { id: 1, deleted: false }, { id: 2, deleted: false } ], actions.markToDoAsDeleted(1))
    ).toEqual([ { id: 1, deleted: true }, { id: 2, deleted: false } ])
  })

  it(`should handle ${ types.RESTORE_DELETED_TODO }`, () => {
    expect(
      reducer([ { id: 1, deleted: true }, { id: 2, deleted: true } ], actions.restoreToDo(1))
    ).toEqual([ { id: 1, deleted: false }, { id: 2, deleted: true } ])
  })

  it(`should handle ${ types.FINALLY_REMOVE_TODO }`, () => {
    expect(
      reducer([ { id: 1 }, { id: 2 } ], actions.finallyRemoveToDo(1))
    ).toEqual([ { id: 2 } ])
  })

  it(`should handle ${ types.FINALLY_REMOVE_ALL_DELETED_TODOES }`, () => {
    expect(
      reducer([ { id: 1, deleted: true },
                { id: 2, deleted: true },
                { id: 3, deleted: false }
              ], actions.finallyDeleteRemovedToDoes())
    ).toEqual([ { id: 3, deleted: false } ])
  })
})

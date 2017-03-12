import React, { PropTypes, Component }      from 'react'

import FlatButton                           from 'material-ui/FlatButton'
import { Card, CardText }                   from 'material-ui/Card'
import Checkbox                             from 'material-ui/Checkbox'
import TextField                            from 'material-ui/TextField';

import { SHOW_ALL, SHOW_DONE, SHOW_ACTIVE } from '../constants/ToDoFilters'

export default class ToDoItems extends Component {
  static PropTypes = {
    stateTodos: PropTypes.array.isRequired,
    stateFilter: PropTypes.string.isRequired,
    stateShowDeleted: PropTypes.bool.isRequired
  }

  constructor() {
    super()

    this.state = {
      errorMessage: ''
    }
  }

  changeProgressBarValue() {
    const commonToDoesLength = this.props.stateTodos.length,
          doneToDoesLength = this.props.stateTodos.filter(item => item.completed === true && item.deleted === false).length,
          result = 100 * doneToDoesLength / commonToDoesLength
          return isNaN(result) ? 0 : result
  }

  componentDidMount() {
     this.props.dispatchToDoItems.actionProgressBarChangeValue(this.changeProgressBarValue())
   }

  componentDidUpdate() {
    if(this.changeProgressBarValue() !== this.props.stateProgressBarValue) {
       this.props.dispatchToDoItems.actionProgressBarChangeValue(this.changeProgressBarValue())
    }
  }

  onClickCheckboxToDo(id) {
    this.props.dispatchToDoItems.markToDoAsDone(id)
  }

  onClickMarkToDoAsDeleted(id) {
    this.props.dispatchToDoItems.markToDoAsDeleted(id)
  }

  onClickFinallyDeleteToDo(id) {
    this.props.dispatchToDoItems.finallyRemoveToDo(id)
  }

  onClickRestoreToDo(id) {
    this.props.dispatchToDoItems.restoreToDo(id)
  }

  onClickText(id, onChange) {
    this.props.dispatchToDoItems.markToDoAsOnChange(id, onChange)
  }

  onChangeEditTodo(id, cont, text) {
    this.props.dispatchToDoItems.changeToDoText(id, text)

    if(text === '') {
      this.setState({ errorMessage: 'This is required field' })
    } else {
      this.setState({ errorMessage: '' })
    }
  }

  getVisibleTodos() {
    const { stateTodos, stateFilter, stateShowDeleted } = this.props

    if(stateShowDeleted) {
      return stateTodos
    }

    switch (stateFilter) {
      case SHOW_ALL:
        return stateTodos
      case SHOW_DONE:
        return stateTodos.filter(todo => todo.completed === true)
      case SHOW_ACTIVE:
        return stateTodos.filter(todo => todo.completed === false)
      default:
        return stateTodos
    }
  }

  render() {
    const { stateShowDeleted } = this.props
    return (
      <div className='todo-items'>
        { this.getVisibleTodos().map(item => (
          <Card key={ item.id }>
            <CardText>
              { (item.onChange && !stateShowDeleted) ?
                ( <TextField hintText='Edit todo'
                             fullWidth={ true }
                             value={ item.text }
                             onChange={ this.onChangeEditTodo.bind(this, item.id) }
                             autoFocus
                             onBlur={ this.state.errorMessage.length === 0 && this.onClickText.bind(this, item.id, false ) }
                             errorText= { this.state.errorMessage }
                  />
                ) :
                ( <div onClick={ this.onClickText.bind(this, item.id, true) }
                      className={ `todo__text ${ item.completed ? 'todo__completed' : '' }` } > 
                       { item.text }
                 </div> )}

              <div className='todo__buttons'>
                <FlatButton label='Remove' secondary={ true } onClick= {  !stateShowDeleted ?
                                                                          this.onClickMarkToDoAsDeleted.bind(this, item.id) :
                                                                          this.onClickFinallyDeleteToDo.bind(this, item.id)
                                                                        }
                                                                          />
                { stateShowDeleted && <FlatButton label='Restore'
                                                  secondary={ false }
                                                  onClick={ this.onClickRestoreToDo.bind(this, item.id) }
                                      />}

                { !stateShowDeleted && <FlatButton label='Edit'
                                                   secondary={ true }
                                                   onClick= { this.onClickText.bind(this, item.id, true) }
                                       />}
                <div className='todo__checkbox-done'>
                  {!stateShowDeleted && (
                        <Checkbox onCheck={ this.onClickCheckboxToDo.bind(this, item.id) }
                                  defaultChecked={ item.completed }
                        />)}
                </div>
            </div>
            </CardText>
          </Card>))
         }
      </div>
    );
  }
}

import {combineReducers} from 'redux'
import {counterReducer} from './counter.reducer'
import {todolist_reducer} from './todoList.reducer'

export default combineReducers({
    counter: counterReducer, 
    todolist: todolist_reducer
})

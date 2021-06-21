import React from 'react'
// import { useState } from 'react'
import { connect } from 'react-redux'
import { toggle_todo } from '../../store/actions/todoList'


const TodoItem = ({ todo, toggle_todo, id,  delete_todo}) => {

    return (
        <div 
          style={
              { ...styles, 
                textDecoration: todo.complete ? 'line-through' : 'none' 
              }
              
              }>
            <span>{todo.text}</span>
            <button onClick={() => delete_todo(id)}>delete</button>
            <button onClick={() => toggle_todo(id)}>complete</button>
        </div>
    )
}

const styles = {
    display: 'flex',
    justifyContent: 'space-between'
}

// const MapDispatchToProps = dispatch => ({
//     toggle_todo:  dispatch(toggle_todo())
// })
const MapDispatchToProps = dispatch => ({
    toggle_todo: (id) =>   dispatch(toggle_todo(id))
})


// эгер state кереги жок болсо, биринчи аргументке null жазабыз
export default connect(null, MapDispatchToProps)(TodoItem)


// dispatch = () => {
//     function(){
//         todolist_reducer(state, action)
//     }
// }    
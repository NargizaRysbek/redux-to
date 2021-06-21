import React from 'react'
import {useState} from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import TodoItem  from '../TodoItem'
import {add_todo} from '../../store/actions/todoList'



const TodoList = ({state, add_todo}) => {
    

    console.log(state)

    const [inputValue, setInputValue] = useState('')
    
    return (
        <div style={styles}>
            <div>
                <input type="text" 
                placeholder="type smth..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => add_todo(inputValue)}>Add</button>
            </div>
            <ul>
                {
                    state.map((todo, id) => {
                        return <TodoItem todo={todo} id={id} key={id}/>
                    })
                }
            </ul>
        </div>
    )
}

const styles = {
    width: '300px',
    margin: '0 auto'
}

const mapStatetoProps = state => ({
    state: state.todolist            // todolist: todolist_reducer
})


const MapDispatchToProps = dispatch => {  // всю логику объединяет
    return bindActionCreators({
        add_todo
    }, dispatch)  // слушает изменения
}

// const bindActionCreators = ({}, ()=>{dispatch}) => {   // ждет два аргумента объект и функцию

// }

export default connect(mapStatetoProps,MapDispatchToProps)(TodoList)

// connect((state) => {state.todolist})(TodoList) под капотом 
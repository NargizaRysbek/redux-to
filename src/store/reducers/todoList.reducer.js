import {
    ADD_TODO,
    TOGGLE_TODO,
    DELETE_TODO
} from '../actions/todoList'

const initialState = [{
        text: 'go to show',
        complete: false
    },
    {
        text: 'go to home',
        complete: false
    },

];

export const todolist_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.payload,
                    complete: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, id) => {
                return id === action.payload ? {
                    ...todo,
                    complete: !todo.complete
                } : todo
            })
        case DELETE_TODO:
            return state.map((todo, id) => {
                return id === action.payload ? {0000000                                                                                                                                                                                                                                                                          
                    ...todo, delete: splice(id, 1)
                } : todo
            })

        default:
            return state;
    }
};
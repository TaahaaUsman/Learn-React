import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: 'Hello World'
    }]
}

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add_todo: (state, action) => {
            const todo = {
                id: nanoid,
                text: action.payload
            }
            state.todos.push(todo);
        },
        remove_todo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const {add_todo, remove_todo} = TodoSlice.actions

export const TodoReducer =  TodoSlice.reducer
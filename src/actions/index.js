import { v4 } from 'node-uuid';

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text:text,
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id:id,
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id:id,
});

export const changeFilter = (filter) => ({
    type: 'CHANGE_FILTER',
    filter:filter,
});

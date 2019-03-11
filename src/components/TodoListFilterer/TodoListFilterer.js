import React from "react"
import { connect } from 'react-redux';
import compose from "ramda/es/compose";
import TodoList from "../TodoList/TodoList"

const getVisibleTodos = (todos, {filter}) => {
    switch (filter) {
        case 'all':
            return todos;
        case 'completed':
            return todos.filter(t => t.completed);
        case 'active':
            return todos.filter(t => !t.completed);
        default:
            console.log("Error! There is no such filter");
    }
};

const TodoListFilterer = ({todos})=>{
    return (
        <TodoList todos={todos}/>
    )
}

const enhancer = compose(
    connect(state=>({todos:getVisibleTodos(state.todos,state.todoFilters.find(filter=>{return filter.active}))})),
)

export default enhancer(TodoListFilterer)
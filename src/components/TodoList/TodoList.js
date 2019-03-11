import React from "react"
import {connect} from "react-redux"
import compose from "ramda/es/compose"
import Todo from "../Todo/Todo"
import {toggleTodo, deleteTodo} from "../../actions";
import {withHandlers} from "recompose";

const TodoList = ({todos, onClick, onButtonClick}) => {
    return (<ul className="todo__list">
        {todos.map(item =>
            <Todo text={item.text} key={item.id} onClick={() => {
                onClick(item.id)
            }} completed={item.completed} onButtonClick={() => {
                onButtonClick(item.id)
            }}/>
        )}
    </ul>)
}

const enhancer = compose(
    connect(null, {toggleTodo, deleteTodo}
    ),
    withHandlers({
        onButtonClick: ({deleteTodo}) => id => {
            deleteTodo(id)
        },
        onClick: ({toggleTodo}) => id => {
            toggleTodo(id)
        }
    })
);

export default enhancer(TodoList)
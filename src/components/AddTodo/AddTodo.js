import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import compose from "ramda/es/compose";
import {withHandlers, withState} from "recompose";

const AddTodo = ({ onSubmit, setInputRoot}) => {
    let input;

    return (
        <div>
            <form
                className="todo__form"
                onSubmit={onSubmit}
            >
                <input
                    className="todo__input" type="text" placeholder="You'd better enter your task"
                    ref={setInputRoot}
                />
            </form>
        </div>
    );
};

const enhancer = compose(
    connect(null,{addTodo:addTodo}),
    withState("inputRoot", "setInputRoot", null),
    withHandlers({
        onSubmit: ({inputRoot,addTodo}) => event =>{
            event.preventDefault();
            addTodo(inputRoot.value);
            inputRoot.value = ""
        }
    })
)

export default enhancer(AddTodo)

import React from "react"
import "./todo.scss"
import TodoListFilterer from "../TodoListFilterer/TodoListFilterer"
import AddTodo from "../AddTodo/AddTodo"
import Filters from "../Filters/Filters"

const App = ()=>(
    <section className={"todo"}>
        <h3 className="todo__title">ROBOTA</h3>
        <AddTodo/>
        <TodoListFilterer/>
        <Filters/>
    </section>
)

export default App
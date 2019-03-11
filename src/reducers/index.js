import {combineReducers} from "redux"
import todos from "./todo"
import todoFilters from "./todoFilters"

const todoReducers = combineReducers({
    todos,
    todoFilters
})

export default todoReducers
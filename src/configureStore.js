import {createStore} from "redux"
import todoReducers from "./reducers/index"

const configureStore = ()=>{
    const store = createStore(todoReducers)
    return store
}

export default configureStore
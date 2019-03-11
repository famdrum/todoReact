import React from "react"
import { connect } from 'react-redux';
import { changeFilter } from '../../actions';
import compose from "ramda/es/compose";
import {withHandlers} from "recompose";

const Filters = ({todoFilters, onClick})=>(
    <ul className={"todo__filters"}>
        {todoFilters.map(item=>(
            <li key={item.filter} onClick={()=>{onClick(item.filter)}} style={{border: item.active ? "1px solid rgb(187, 187, 187)": "none"}}>{item.filter}</li>
        ))}
    </ul>
)

const enhancer = compose(
    connect(
        state=>({
        todoFilters: state.todoFilters
    }), {changeFilter: changeFilter}),
    withHandlers({
        onClick: ({changeFilter})=>filter=>{
            changeFilter(filter)}
    })
)

export default enhancer(Filters)
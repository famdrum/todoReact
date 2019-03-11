const todoFilters = (state=[
    {filter: "all", active: true},
    {filter: "active", active: false},
    {filter: "completed", active: false},
], action)=>{
    switch (action.type){
        case "CHANGE_FILTER":
            return state.map(item=>{
                return item.filter == action.filter ? {...item, active: true} : {...item, active: false}
            })
        default:
            return state
    }
}

export default todoFilters
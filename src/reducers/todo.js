const todos = (state=[],action)=>{
    switch(action.type){
        case "ADD_TODO":
            return[
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case "TOGGLE_TODO":
            return state.map(item=>{
                if(item.id !== action.id){
                    return item
                }else{
                    return {
                        ...item,
                        completed:!item.completed
                    }
                }
            })
        case "DELETE_TODO":
            return state.filter(item=>{
                return item.id !== action.id
            })
        default:
            return state
    }
};

export default todos
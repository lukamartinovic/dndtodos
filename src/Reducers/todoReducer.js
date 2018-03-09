const todoReducer = (state = [], action) => {
    let newState = state.slice();
    switch (action.type){
        case "ADD_TODO":
            newState.push({text: action.text});
            return newState;
        case "REMOVE_TODO":
            newState.splice(action.index, 1);
            return newState;
        default:
            return state
            
    }
};

export default todoReducer
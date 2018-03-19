const todoReducer = (state = [], action) => {
    let newState = state.slice();
    const time = new Date();
    const {idSecond, idFirst, text, id} = action;

    switch (action.type){
        case "ADD_TODO":
            newState.push({text: text, id:time.getTime(), done:false});
            return newState;
        case "REMOVE_TODO":
            const removeIndex = newState.findIndex(todo => todo.id === id);
            newState.splice(removeIndex, 1);
            return newState;
        case "SWAP_TODOS":
            const indexSecond = newState.findIndex(todo => todo.id === idSecond);
            const indexFirst = newState.findIndex(todo => todo.id === idFirst);
            const temp = newState[indexFirst];
            newState[indexFirst] = newState[indexSecond];
            newState[indexSecond] = temp;
            return newState;
        case "CHECK":
            const todoIndex = newState.findIndex(todo => todo.id === id);
            newState[todoIndex].done = !newState[todoIndex].done;
            return newState;
        default:
            return state
            
    }
};

export default todoReducer
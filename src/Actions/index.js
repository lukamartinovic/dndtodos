export const addTodo = todos => {
    return {
        type: "ADD_TODO",
        text
    }
};

export const removeTodo = todos => {
    return {
        type: "REMOVE_TODO",
        index
    }
}
export const updateItemStatus = (id) => {
    return {
        type: "UPDATE_STATUS", payload: id
    };
}

export const addToDoItem = (toDo) => {
    return {
        type: "ADD_TODO", payload: toDo
    };
}

export const deleteToDoItem = (id) => {
    return {
        type: "DELETE_TODO", payload: id
    };
}

export const initTodos = todos => {
    return {
        type: "INIT_TODO", payload: todos
    };
    
}
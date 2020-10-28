import api from "./api";
export const getTodos = () => {
    return api.get('/api/todos')
} 

export const addTodo = text => (api.post('/api/todos',{text}))
 
export const deleteTodo = id => (api.delete(`/api/todos/${id}`))

export const updateTodo = ({id, status}) => (api.put(`/api/todos/${id}`, { status: !status }))

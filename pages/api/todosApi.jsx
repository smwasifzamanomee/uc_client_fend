import axios from "axios";

const todosApi = axios.create({
    baseURL: "http://localhost:3500"
})

export const getTodos = async () =>{
    const response = await todosApi.get("/todos")
    return response.data
}
export const addTodos = async (todo) =>{
    const response = await todosApi.post("/todos", todo)
    return response.data
}
export const updateTodos = async (todo) =>{
    const response = await todosApi.patch(`/todos/${todo.id}`, todo)
    return response.data
}
export const deleteTodos = async ({id}) =>{
    const response = await todosApi.delete(`/todos/${id}`, id)
    return response.data
}

export default todosApi
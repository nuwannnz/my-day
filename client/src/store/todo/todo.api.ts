import axios from 'axios';
import { API_BASE, TODO_DELETE, TODO_FETCH_ALL, TODO_POST, TODO_PUT } from '../../apiEndpoints';

const fetchAllTodos = async () => {
    const response = await axios.get(`${API_BASE}${TODO_FETCH_ALL}`);
    if (response.status === 200) {
        return (response.data as APIResponseData).body;
    }
    throw new Error((response.data as APIResponseData).message);

};

const postTodo = async (payload: object) => {
    try {
        const response = await axios.post(`${API_BASE}${TODO_POST}`, payload);
        if (response.status === 201) {
            return (response.data as APIResponseData).body;
        }
        throw new Error((response.data as APIResponseData).message);
    } catch (error) {
        console.error('Failed to post todo', error);
        return null;
    }
}


const putTodo = async (payload: UpdateTodoPayload) => {
    const response = await axios.put(`${API_BASE}${TODO_PUT}/${payload.todoId}`, payload.todo as object);
    if (response.status === 201) {
        return (response.data as APIResponseData).body;
    }
    throw new Error((response.data as APIResponseData).message);

}


const deleteTodo = async (payload: DeleteTodoPayload) => {

    const response = await axios.delete(`${API_BASE}${TODO_DELETE}/${payload.todoId}`);
    if (response.status === 200) {
        return (response.data as APIResponseData).body;
    }
    throw new Error((response.data as APIResponseData).message);

}

const todoAPI = {
    fetchAllTodos,
    postTodo,
    putTodo,
    deleteTodo
}

export default todoAPI;
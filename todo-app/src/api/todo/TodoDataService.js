import axios from 'axios'
import { API_URL, JPA_URL } from '../../constant'
class TodoDataService {
    retrieveAllTodos(name) {
        return axios.get(`${JPA_URL}/users/${name}/todos`)
    }

    retrieveTodo(name, id) {
        return axios.get(`${JPA_URL}/users/${name}/todos/${id}`)
    }

    deleteTodo(name, id) {
        return axios.delete(`${JPA_URL}/users/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo) {
        return axios.put(`${JPA_URL}/users/${name}/todos/${id}`, todo)
    }

    createTodo(name, todo) {
        return axios.post(`${JPA_URL}/users/${name}/todos`, todo)
    }
}

export default new TodoDataService()
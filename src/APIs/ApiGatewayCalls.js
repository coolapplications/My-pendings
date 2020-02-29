import Axios from 'axios';

import { url } from '../utils/URL';

export function postToDo(todo) {
  return Axios.post(`${url}/todos`, todo);
}

export function getToDo(id) {
  return Axios.get(`${url}/todos/${id}`);
}

export function getToDos() {
  return Axios.get(`${url}/todos`);
}

export function deleteToDo(id) {
  return Axios.delete(`${url}/todos/${id}`);
}

export function updateToDo(todo) {
  return Axios.put(`${url}/todos/${todo.id}`, todo);
}

// Delete example
/*export function postToDo(id) {
  return Axios.delete(`${url}/todos/${id}`);
}*/

/* axios.post(`${url}search?q=${text}&offset=${offset}&limit=${limit}`, payload)
        .then(res => console.log(res.data)); */

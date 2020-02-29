import Axios from 'axios';

import { url } from '../utils/URL';

export function postToDo(todo) {
  return Axios.post(`${url}/todos`, todo);
}

export function getToDos() {
  return Axios.get(`${url}/todos`);
}

/* axios.post(`${url}search?q=${text}&offset=${offset}&limit=${limit}`, payload)
        .then(res => console.log(res.data)); */

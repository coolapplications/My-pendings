import toDos from '../App';
import Axios from 'axios';
import { url } from '../utils/URL';

export function postToDo() {
  Axios.post('http://localhost:3000/utils/ToDos', {
    id: toDos.id,
    title: toDos.title,
    description: toDos.description,
    responsible: toDos.responsible,
    isComplete: toDos.isComplete
  })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}

export function getToDos() {
  return Axios.get(`${url}/todos`);
}

/* axios.post(`${url}search?q=${text}&offset=${offset}&limit=${limit}`, payload)
        .then(res => console.log(res.data)); */

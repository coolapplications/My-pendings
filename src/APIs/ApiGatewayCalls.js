import toDos from "../App";
import axios from "axios";
//import url from "../utils/URL";


export function postToDo(){axios.post('http://localhost:3000/utils/ToDos', {
    id: toDos.id,
    title: toDos.title,
    description: toDos.description,
    responsible: toDos.responsible,
    isComplete: toDos.isComplete
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });}

  export function getToDos(){
    axios.get('http://localhost:3000/utils/ToDos')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

/* axios.post(`${url}search?q=${text}&offset=${offset}&limit=${limit}`, payload)
        .then(res => console.log(res.data)); */


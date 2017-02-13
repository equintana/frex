import React from 'react';
import { render } from 'react-dom';
import PeopleContainer from './PeopleContainer';

var people = [
  { name: "David",
    age: 30,
    occupation: "front-end dev",
    image_url: ""
  },
  { name: "Erlinis",
    age: 30,
    occupation: "Barbie Girl",
    image_url: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRQP6NqbRaglqY6c9ztuS0v52ZPEz0MtVm_DfcT3bwBq4On_vjhdA"
  },
  { name: "Peter",
    age: 31,
    occupation: "The Lord of the Ladies",
    image_url: ""
  }
]

var now = new Date().toLocaleTimeString()
render(
  (
    <div>
      <PeopleContainer time={now} people={people}/>
    </div>
  ),
  document.getElementById('root')
);



import React from 'react';
import { render } from 'react-dom';
// import movies from './movie/movies.json';
import Movies from './movie/Movies';

render(
  (
    <Movies movies={[]}/>
  ),
  document.getElementById('root')
);



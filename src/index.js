import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './movie/Layout';
import Movies from './movie/Movies';
import MovieDetail from './movie/MovieDetail';

const app = document.getElementById('app');
render(
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Movies}/>
        <Route path="/movies/:id" component={MovieDetail}/>
      </Route>
    </Router>
  ,
  app
);



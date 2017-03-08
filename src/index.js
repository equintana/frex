import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './movie/Layout';

const app = document.getElementById('app');
render(
    <Router>
      <Layout/>
    </Router>
  ,
  app
);


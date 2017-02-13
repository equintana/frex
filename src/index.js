/*
 * Using component state and creating fool components
 */

import React from 'react';
import { render } from 'react-dom';
import TimerContainer from './TimerContainer';

var now = new Date().toLocaleTimeString()
render(
  (
    <TimerContainer time={now} />
  ),
  document.getElementById('root')
);


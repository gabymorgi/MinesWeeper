import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import minesStore from './reducers'
import MinesBoard from './components/MinesBoardView'
import './index.css';

let store = createStore(minesStore)

render(
  <Provider store={store}>
    <MinesBoard />
  </Provider>,
  document.getElementById('root')
)

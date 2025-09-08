import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './action';

const store = createStore(reducer);

const { dispatch, subscribe, getState } = store;

const update = () => {
  document.getElementById('counter').textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

document.getElementById('INC').addEventListener('click', inc);

document.getElementById('DEC').addEventListener('click', dec);

document.getElementById('RND').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});

ReactDOM.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>,
  document.getElementById('root')
);
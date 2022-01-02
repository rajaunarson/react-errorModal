import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions';

export default function Calculator() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1> Calculator Page count is {counter} </h1>
      <button onClick={() => dispatch(increment())}> Increment </button>
      &nbsp;
      <button onClick={() => dispatch(decrement())}> Decrement </button>
    </div>
  );
}

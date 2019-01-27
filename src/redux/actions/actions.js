import {
  ADD, ADD_NUMBER, SUB, INPUT, ADD2,
} from './actionTypes';

export const add = () => ({
  type: ADD,
});

export const sub = () => ({
  type: SUB,
});

export const addNumber = number => ({
  type: ADD_NUMBER,
  payload: number,
});

export const input = value => ({
  type: INPUT,
  payload: value,
});

export const asyncAdd = number => dispatch => setTimeout(() => dispatch(addNumber(number)), 2000);

export const add2 = number => ({
  type: ADD2,
  payload: number,
});

import {
  ADD, ADD_NUMBER, INPUT, SUB,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  counter: 0,
  inputValue: 5,
};

export default function counter1(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case SUB:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case INPUT:
      return {
        ...state,
        inputValue: action.payload,
      };
    default:
      return state;
  }
}

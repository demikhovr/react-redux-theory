import { ADD2 } from '../actions/actionTypes';

const INITIAL_STATE = {
  counter2: 200,
};

export default function counter2(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD2:
      return {
        ...state,
        counter2: state.counter2 + action.payload,
      };
    default:
      return state;
  }
}

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import Counter from './Counter';
import {
  add, sub, addNumber, input, asyncAdd,
} from './redux/actions/actions';

const App = ({
  counter, onAdd, onSub, onAddNumber, onInput, inputValue, onAsyncAdd,
}) => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <h2>
      Счетчик&nbsp;
      {counter}
    </h2>
    <hr />
    <div>
      <button onClick={onAdd} type="button">Add 1</button>
      <button onClick={onSub} type="button">Sub 1</button>
    </div>
    <div>
      <input type="number" onChange={onInput} value={inputValue || ''} />
      <button onClick={onAddNumber.bind(this, inputValue)} type="button">
        Add&nbsp;
        {inputValue}
      </button>
      <button onClick={onAddNumber.bind(this, -inputValue)} type="button">
        Sub&nbsp;
        {inputValue}
      </button>
    </div>
    <div>
      <button onClick={onAsyncAdd.bind(this, 100)} type="button">
        Async add 100
      </button>
    </div>
    <Counter />
  </div>
);

App.propTypes = {
  counter: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onSub: PropTypes.func.isRequired,
  onAddNumber: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
  onAsyncAdd: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counter: state.counter1.counter,
  inputValue: state.counter1.inputValue,
});

const mapDispatchToProps = dispatch => ({
  onAdd: () => dispatch(add()),
  onSub: () => dispatch(sub()),
  onAddNumber: number => dispatch(addNumber(number)),
  onInput: ({ target }) => dispatch(input(+target.value)),
  onAsyncAdd: number => dispatch(asyncAdd(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

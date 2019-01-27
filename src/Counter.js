import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { add2 } from './redux/actions/actions';

const Counter = ({ counter, onChange }) => (
  <div style={{ padding: 20, border: '2px solid #cccccc' }}>
    <h2>
      Counter&nbsp;
      {counter}
    </h2>
    <hr />
    <div>
      <button onClick={() => onChange(1)} type="button">Add 1</button>
      <button onClick={() => onChange(-1)} type="button">Sub 1</button>
    </div>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  counter: state.counter2.counter2,
});

const mapDispatchToProps = dispatch => ({
  onChange: number => dispatch(add2(number)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

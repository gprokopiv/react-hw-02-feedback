import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

// const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   return options.map(option => (
//     <button onClick={onLeaveFeedback(option)}>{option}</button>
//   ))

// );
// const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <ul className="FeedbackOptions">
//     {options.map(({ id, option }) => (
//       <li key={id} className="item">
//         <button onClick={() => onLeaveFeedback(option)}>{option}</button>
//       </li>
//     ))}
//   </ul>
// );

const FeedbackOptions = function ({ value1, value2, value3 }) {
  return (
    <div className={s.feedBack}>
      <button
        className={s.button}
        type="button"
        name="good"
        onClick={value1}
      ></button>
      <button
        className={s.button}
        type="button"
        name="neutral"
        onClick={value2}
      ></button>
      <button
        className={s.button}
        type="button"
        name="bad"
        onClick={value3}
      ></button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  value1: PropTypes.node.isRequired,
  value2: PropTypes.node.isRequired,
  value3: PropTypes.node.isRequired,
};
export default FeedbackOptions;

import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = function ({ good, bad, neutral }) {
  return (
    <div className={s.feedBack}>
      <button className={s.button} type="button" name="Good" onClick={good}>
        Good
      </button>
      <button
        className={s.button}
        type="button"
        name="neutral"
        onClick={neutral}
      >
        Neutral
      </button>
      <button className={s.button} type="button" name="Bad" onClick={bad}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
};

// const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <ul className="FeedbackOptions">
//     {options.map(option => (
//       <li className="item">
//         <button onClick={() => onLeaveFeedback(option)}>{option}</button>
//       </li>
//     ))}
//   </ul>
// );
// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string.isRequired),
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
export default FeedbackOptions;

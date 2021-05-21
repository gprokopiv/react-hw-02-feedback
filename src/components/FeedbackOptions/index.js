import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

// const FeedbackOptions = function ({ good, bad, neutral }) {
//   return (
//     <div className={s.feedBack}>
//       <button className={s.button} type="button" name="Good" onClick={good}>
//         Good
//       </button>
//       <button
//         className={s.button}
//         type="button"
//         name="neutral"
//         onClick={neutral}
//       >
//         Neutral
//       </button>
//       <button className={s.button} type="button" name="Bad" onClick={bad}>
//         Bad
//       </button>
//     </div>
//   );
// };

// FeedbackOptions.propTypes = {
//   good: PropTypes.func.isRequired,
//   bad: PropTypes.func.isRequired,
//   neutral: PropTypes.func.isRequired,
// };

// const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <ul className="FeedbackOptions">
//     {options.map(option => (
//       <li className={s.feedBack}>
//         <button className={s.button} onClick={() => onLeaveFeedback(option)}>
//           {option}
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// function FeedbackOptions({ options, onLeaveFeedback }) {
//   console.log(options);
//   return options.map(option => (
//     <button
//       type="button"
//       className={s.button}
//       key={option}
//       onClick={() => onLeaveFeedback(option)}
//     >
//       {option}
//     </button>
//   ));
// }
function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <button
      type="button"
      className={s.button}
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </button>
  ));
}

// const FeedbackOptions = function ({ options, onLeaveFeedback }) {
//   return (
//     <>
//       {options.map(option => (
//         <button
//           type="button"
//           className={s.button}
//           key={option}
//           onClick={() => onLeaveFeedback(option)}
//         >
//           {option}
//         </button>
//       ))}
//     </>
//   );
// };
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;

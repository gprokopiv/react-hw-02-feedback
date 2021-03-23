import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({
  good,
  neutral,
  bad,
  countTotalFeedback,
  positivePercentage,
}) {
  return (
    <ul className={s.list}>
      <li className={s.item}>Good: {good}</li>
      <li className={s.item}>Neutral: {neutral}</li>
      <li className={s.item}>Bad: {bad}</li>
      <li className={s.item}>Total: {countTotalFeedback}</li>
      <li className={s.item}>Positive Percentage: {positivePercentage} %</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

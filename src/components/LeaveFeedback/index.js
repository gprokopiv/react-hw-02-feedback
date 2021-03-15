import React from 'react';

const LeaveFeedback = ({ onIncrement, onNeutral, onDecrement }) => (
  <>
    <h1>Please leave feedback</h1>
    <button onCick={onIncrement}>Good</button>
    <button onCick={onNeutral}>Neutral</button>
    <button onCick={onDecrement}>Bad</button>
  </>
);

export default LeaveFeedback;

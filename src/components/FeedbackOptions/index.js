import React from 'react';

const FeedbackOptions = ({ onIncrement, onNeutral, onDecrement }) => (
  <>
    <button onClick={onIncrement}>Good</button>
    <button onClick={onNeutral}>Neutral</button>
    <button onClick={onDecrement}>Bad</button>
  </>
);

export default FeedbackOptions;

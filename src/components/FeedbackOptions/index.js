import React from 'react';

const FeedbackOptions = ({ onIncrement, onNeutral, onDecrement }) => (
  <>
    <button onClick={onIncrement}>Good</button>
    <button onClick={onNeutral}>Neutral</button>
    <button onClick={() => setCount(count - 1)}>Bad</button>
  </>
);

export default FeedbackOptions;

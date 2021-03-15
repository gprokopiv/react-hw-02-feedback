// import React, { Components } from 'react';
import React, { useState } from 'react';
// import LeaveFeedback from './components/LeaveFeedback';
// import Statistics from './components/Statistics';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  // countTotalFeedback();
  // countTotalFeedback();

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
};

export default App;

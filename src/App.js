import React, { Component } from 'react';

import Container from './components/Container';
import Section from './components/Section';
// import Notification from './components/Notification';
// import FeedbackOptions from './components/FeedbackOptions';
// import Statistics from './components/Statistics';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage(total) {
    return Math.round((this.state.good * 100) / total);
  }

  increaseGood = () => {
    this.setState(prevState => {
      const good = prevState.good + 1;
      return { good };
    });
  };
  increaseNeutral = () => {
    this.setState(prevState => {
      const neutral = prevState.neutral + 1;
      return { neutral };
    });
  };
  increaseBad = () => {
    this.setState(prevState => {
      const bad = prevState.bad + 1;
      return { bad };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage(total);
    return (
      <Container>
        <Section>
          <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive Percentage: {percent} %</li>
          </ul>
        </Section>
        <Section>
          <button onClick={this.increaseGood}>Good</button>
          <button onClick={this.increaseNeutral}>Neutral</button>
          <button onClick={this.increaseBad}>Bad</button>
        </Section>
      </Container>
    );
  }
}

export default App;

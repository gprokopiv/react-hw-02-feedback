import React, { Component } from 'react';

import Container from './components/Container';
import Section from './components/Section';
import Notification from './components/Notification';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
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
        <Section title="Please leave feedback">
          <FeedbackOptions
            good={this.increaseGood}
            neutral={this.increaseNeutral}
            bad={this.increaseBad}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              countTotalFeedback={total}
              positivePercentage={percent}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;

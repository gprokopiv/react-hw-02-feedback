import React, { Component } from 'react';
import Container from './components/Container';
import Section from './components/Section';
import Notification from './components/Notification';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
// import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // const [count, setCount] = useState(0);
  // const handleIncrement = () => setCount(count + 1);
  // const handleNeurtal = () => setCount(count + 0);
  // const handleDecrement = () => setCount(count - 1);

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };
  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={0} onLeaveFeedback={0} />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.good}
              neutral={this.neutral}
              bad={this.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}

// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleIncrement = () => setCount(count + 1);
//   const handleNeurtal = () => setCount(count + 0);
//   const handleDecrement = () => setCount(count - 1);
//   this.state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   // countTotalFeedback();
//   // countPositiveFeedbackPercentage();

//   return (
//     <Container>
//       <Section title="Please leave feedback">
//         <FeedbackOptions
//           onIncrement={handleIncrement}
//           onState={handleNeurtal}
//           onDecrement={handleDecrement}
//         />
//       </Section>

//       <Section title="Statistics">
//         <Statistics
//           good={this.good}
//           neutral={this.neutral}
//           bad={this.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage}
//         />
//       </Section>
//     </Container>
//   );
// };

// export default App;

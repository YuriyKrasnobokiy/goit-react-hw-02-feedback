import React from 'react';
import { Component } from 'react';
import { Statistic } from './Statistics/Statistic';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 5,
    neutral: 5,
    bad: 3,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) + '%';
  };

  LeaveFeedback = () => {};

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Section title="Please leave a feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.leaveFeedback}
        />

        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

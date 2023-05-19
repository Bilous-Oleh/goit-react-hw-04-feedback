import React, { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbacks = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = event => {
    const option = event.target.value;
    if (option === 'good') setGood(prevGood => prevGood + 1);
    if (option === 'neutral') setNeutral(prevNeutral => prevNeutral + 1);
    if (option === 'bad') setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPersantage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={feedbacks}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPersantage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;

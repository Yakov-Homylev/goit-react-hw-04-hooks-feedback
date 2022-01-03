import React, { useReducer } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "good":
      return { ...state, good: state.good + 1 };
    case "neutral":
      return { ...state, neutral: state.neutral + 1 };
    case "bad":
      return { ...state, bad: state.bad + 1 };

    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const buttonOptions = Object.keys(state);
  const staticsOptions = {
    ...state,
    total: countTotalFeedback(),
    "Positive Feedback": countPositiveFeedbackPercentage(),
  };

  const onLeaveFeedback = (option) => {
    dispatch({ type: option });
  };

  function countTotalFeedback() {
    return state.good + state.neutral + state.bad || 0;
  }
  function countPositiveFeedbackPercentage() {
    return Number.parseInt((state.good * 100) / countTotalFeedback()) || 0;
  }

  return (
    <div>
      <Section title={"Please leave Feedback"}>
        <FeedbackOptions
          options={buttonOptions}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics options={staticsOptions}></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

export default App;

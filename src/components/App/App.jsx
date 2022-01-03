import { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  OnButtonClick = (param) => {
    this.setState({
      [param]: this.state[param] + 1,
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => value + acc, 0) || 0;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Number.parseInt((good * 100) / this.countTotalFeedback()) || 0;
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title={"Please leave Feedback"}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.OnButtonClick}
          />
        </Section>
        <Section title={"Statistics"}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={"There is no feedback"} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;

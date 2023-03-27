import { Component } from "react";
import { FeedbackOptions } from "./Component/Feedback/FeedbackOptions";
import { Statistics } from "./Component/Statistics/Statistics";
import { Section } from "./Component/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const currentValue = event.target.value;
    this.setState((prevState) => ({
      [currentValue]: prevState[currentValue] + 1,
    }));
  };

  countTotalFeedback = () => {
    const valueArr = Object.values(this.state);
    const total = valueArr.reduce((acc, value) => (acc += value), 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.trunc((this.state.good / this.countTotalFeedback()) * 100) + "%"
    );
  };

  render() {
    const btnName = Object.keys(this.state);
    const {
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      onLeaveFeedback,
    } = this;
    return (
      <>
        <Section
          title="Please leave feedback"
          children={
            <FeedbackOptions
              options={btnName}
              onLeaveFeedback={onLeaveFeedback}
            />
          }
        />

        <Section
          title={
            countTotalFeedback() > 0 ? "Statistic" : "There is no feedback"
          }
          children={
            countTotalFeedback() > 0 ? (
              <Statistics
                stats={state}
                total={countTotalFeedback()}
                positiveFeedback={countPositiveFeedbackPercentage()}
              />
            ) : (
              this.title
            )
          }
        />
      </>
    );
  }
}

export default App;

import { Component } from "react";
import { Button } from "./Feedback.styled";
import PropTypes from "prop-types";

export class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
    onLeaveFeedback: "",
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div>
        {options.map((btn) => (
          <Button key={btn} value={btn} type="button" onClick={onLeaveFeedback}>
            {btn}
          </Button>
        ))}
      </div>
    );
  }
}

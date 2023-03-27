import { Container } from "./Statistics.style";
import { Component } from "react";
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";

export class Statistics extends Component {
  static defaultProps = {
    stats: { good: 0, neutral: 0, bad: 0 },
    total: 0,
    positiveFeedback: 0,
  };

  static propTypes = {
    stats: PropTypes.object.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.string.isRequired,
  };

  render() {
    const { stats, total, positiveFeedback } = this.props;
    return (
      <Container>
        {Object.entries(stats).map(([key, value]) => (
          <li key={nanoid ()}>
            <span>{key} :</span>
            <span>{value}</span>
          </li>
        ))}
        <li key={nanoid ()}>
          <span>Total :</span>
          <span>{total}</span>
        </li>
        <li key={nanoid ()}>
          <span>PositiveFeedback :</span>
          <span>{positiveFeedback}</span>
        </li>
      </Container>
    );
  }
}

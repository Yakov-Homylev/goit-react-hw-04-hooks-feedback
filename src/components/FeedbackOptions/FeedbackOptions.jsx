import PropTypes from "prop-types";
import { Button, List } from "./FeedbackOptions.styled";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map((option) => {
        return (
          <li key={option}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;

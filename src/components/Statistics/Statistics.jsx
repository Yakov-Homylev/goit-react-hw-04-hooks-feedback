import PropTypes from "prop-types";
import { List } from "./Statistics.styled";

function Statistics({ options }) {
  const keys = Object.keys(options);

  return (
    <List>
      {keys.map((option) => {
        const capitalizedWord =
          option.slice(0, 1).toUpperCase() + option.slice(1);

        const percentage = !option.includes("Positive");

        return (
          <li key={option}>
            {capitalizedWord + ":"}{" "}
            {percentage ? options[option] : options[option] + "%"}
          </li>
        );
      })}
    </List>
  );
}

Statistics.propTypes = {
  options: PropTypes.objectOf(PropTypes.number),
};

export default Statistics;

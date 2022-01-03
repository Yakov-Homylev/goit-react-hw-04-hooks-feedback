import PropTypes from "prop-types";
import { List } from "./Statistics.styled";

function Statistics(props) {
  const keys = Object.keys(props);

  return (
    <List>
      {keys.map((key) => {
        const CapitalizeFirstLetter =
          key.slice(0, 1).toUpperCase() + key.slice(1);

        const percentage = !key.includes("Percentage");

        return (
          <li key={key}>
            <p>
              {CapitalizeFirstLetter}:{" "}
              <span>{percentage ? props[key] : props[key] + "%"}</span>
            </p>
          </li>
        );
      })}
    </List>
  );
}

Statistics.propTypes = {
  props: PropTypes.objectOf(PropTypes.number),
};

export default Statistics;

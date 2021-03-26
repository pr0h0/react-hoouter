import React from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "./Context";
import { shouldRender } from "./utils";

const Switch = ({ children }) => {
  const [state] = React.useContext(GlobalContext);

  const oneForRender = children.find(({ props: { path, exact } }) =>
    shouldRender({
      path,
      exact,
      activeRoute: state.activeRoute,
    })
  );

  return oneForRender || null;
};

export default Switch;

Switch.propTypes = {
  children: PropTypes.array,
};

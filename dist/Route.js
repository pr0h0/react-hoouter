import React from "react";
import PropTypes from "prop-types";
import { GlobalContext } from "./Context";

const Route = ({
  path,
  component: Component,
  exact
}) => {
  const [state] = React.useContext(GlobalContext);

  if (!path) {
    return /*#__PURE__*/React.createElement(Component, {
      location: state
    });
  } else if (exact && state.activeRoute === path) {
    return /*#__PURE__*/React.createElement(Component, {
      location: state
    });
  } else if (!exact && state.activeRoute.startsWith(path)) {
    return /*#__PURE__*/React.createElement(Component, {
      location: state
    });
  } else {
    return null;
  }
};

export default Route;
Route.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.func,
  exact: PropTypes.bool
};
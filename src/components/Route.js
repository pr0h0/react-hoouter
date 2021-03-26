import React from "react";
import PropTypes from "prop-types";

import { GlobalContext } from "./Context";
import { shouldRender } from "./utils";

const Route = ({ path, component: Component, exact }) => {
  const [state] = React.useContext(GlobalContext);

  if (shouldRender({ path, exact, activeRoute: state.activeRoute })) {
    return <Component location={state} />;
  }
  return false;
};

export default Route;

Route.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
  exact: PropTypes.bool,
};

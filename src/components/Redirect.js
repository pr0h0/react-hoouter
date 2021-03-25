import React from "react";
import PropTypes from "prop-types";

import { GlobalContext } from "./Context";
import * as TYPES from "./types";

function Redirect({ to }) {
  const [state, dispatch] = React.useContext(GlobalContext);
  console.assert(to, "props 'to' is required");
  if (state.activeRoute !== to) {
    dispatch({ type: TYPES.SET_ACTIVE_ROUTE, activeRoute: to });
  }
  return null;
}

export default Redirect;

Redirect.propTypes = {
  to: PropTypes.string.isRequired,
};

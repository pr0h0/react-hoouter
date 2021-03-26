import React from "react";
import PropTypes from "prop-types";

import * as TYPES from "./types";
import { GlobalContext } from "./Context";

const Link = ({ to, ...props }) => {
  const [, dispatch] = React.useContext(GlobalContext);
  console.assert(to, "props 'to' is required");

  const handleClick = (e) => {
    e.preventDefault();
    if (to) {
      dispatch({ type: TYPES.SET_ACTIVE_ROUTE, activeRoute: to });
    }
  };

  return (
    <a {...props} onClick={handleClick} href={to}>
      {props.children}
    </a>
  );
};

export default Link;

Link.propTypes = {
  to: PropTypes.string,
};

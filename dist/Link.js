function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";
import * as TYPES from "./types";
import { GlobalContext } from "./Context";

const Link = ({
  to,
  ...props
}) => {
  const [, dispatch] = React.useState(GlobalContext);
  console.assert(to, "props 'to' is required");

  const handleClick = e => {
    e.preventDefault();
    dispatch({
      type: TYPES.SET_ACTIVE_ROUTE,
      activeRoute: props.to
    });
  };

  return /*#__PURE__*/React.createElement("a", _extends({}, props, {
    onClick: handleClick,
    href: to
  }), props.children);
};

export default Link;
Link.propTypes = {
  to: PropTypes.string
};
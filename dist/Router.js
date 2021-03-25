import React from "react";
import PropTypes from "prop-types";
import Store from "./Context";

const Router = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(Store, null, children);
};

export default Router;
Router.propTypes = {
  children: PropTypes.array
};
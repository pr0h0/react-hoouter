import React from "react";
import PropTypes from "prop-types";

import Store from "./Context";

const Router = ({ children }) => {
  return <Store>{children}</Store>;
};

export default Router;
Router.propTypes = {
  children: PropTypes.array,
};

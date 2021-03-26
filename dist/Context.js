import React from "react";
import PropTypes from "prop-types";
import GlobalReducer from "./reducer";
const initialState = {
  activeRoute: window.location.pathname,
};

function Store({ children }) {
  const [state, dispatch] = React.useReducer(GlobalReducer, initialState);
  return /*#__PURE__*/ React.createElement(
    GlobalContext.Provider,
    {
      value: [state, dispatch],
    },
    children
  );
}

export const GlobalContext = /*#__PURE__*/ React.createContext(initialState);
export default Store;
Store.propTypes = {
  children: PropTypes.array,
};

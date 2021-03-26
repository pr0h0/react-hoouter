import React from "react";
import PropTypes from "prop-types";

import GlobalReducer from "./reducer";

const initialState = {
  activeRoute: window.location.pathname,
};

function Store({ children }) {
  const [state, dispatch] = React.useReducer(GlobalReducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
}

export const GlobalContext = React.createContext(initialState);
export default Store;

Store.propTypes = {
  children: PropTypes.array,
};

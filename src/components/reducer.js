import * as TYPES from "./types";

const GlobalReducer = (state, action) => {
  switch (action.type) {
    case TYPES.SET_ACTIVE_ROUTE:
      if (!action.activeRoute) return state;
      window.history.pushState(null, action.activeRoute, action.activeRoute);
      return { ...state, activeRoute: action.activeRoute };
    default:
      return state;
  }
};

export default GlobalReducer;

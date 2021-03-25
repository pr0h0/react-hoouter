import * as TYPES from "./types";

const GlobalReducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case TYPES.SET_ACTIVE_ROUTE:
      window.history.pushState(null, undefined, action.activeRoute);
      return { ...state,
        activeRoute: action.activeRoute
      };

    default:
      return state;
  }
};

export default GlobalReducer;
import { useReducer } from "react";
import { LOG_IN, LOG_OUT } from "../constants";

function sessionReducer(state, action) {
  switch (action.type) {
    case LOG_IN:
      const { token } = action;
      sessionStorage.setItem("token", token);
      return { ...state, token };
    case LOG_OUT:
      sessionStorage.clear();
      return { ...state, token: null };
    default:
      return state;
  }
}

export default function useSessionReducer() {
  const [state, dispatch] = useReducer(sessionReducer, {
    token: sessionStorage.getItem("token"),
  });

  return [state, dispatch];
}

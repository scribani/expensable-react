import { createContext } from "react";
import useSessionReducer from "../../hooks/useSessionReducer";
import { LOG_IN, LOG_OUT } from "../../constants";
import { Redirect } from "react-router";

export const SessionContext = createContext({
  contextLogIn: () => {},
  contextLogOut: () => {},
});

export const SessionProvider = ({ children }) => {
  const [session, dispatch] = useSessionReducer();

  function contextLogIn(token) {
    dispatch({ type: LOG_IN, token });
  }

  function contextLogOut() {
    dispatch({ type: LOG_OUT });
    return <Redirect to="/login" />;
  }

  const value = {
    session,
    contextLogIn,
    contextLogOut,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

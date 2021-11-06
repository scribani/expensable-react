import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { SessionContext } from "../contexts/SessionContext";

export default function ProtectedRoute({
  component: Component,
  ...restOfProps
}) {
  const { session } = useContext(SessionContext);

  return session.token ? (
    <Route {...restOfProps} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/login" />
  );
}

import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";
import { SessionProvider } from "./components/contexts/SessionContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import Login from "./pages/Login";
import Expenses from "./pages/Expenses";
import Income from "./pages/Income";
import NotFound from "./pages/NotFound";

const globalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter&family=Roboto&display=swap");
  :root {
    --gray-1: #333333;
    --gray-2: #4f4f4f;
    --gray-4: #bdbdbd;
    --blue-1: #2f80ed;
    --blue-2: #2d9cdb;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Inter", sans-serif;
    color: black;
    background-color: #e5e5e5;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: normal;
    text-align: center;
  }
`;
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;
  min-height: 812px;
  background-color: white;
  padding: 32px 30px;
  margin: auto;
`;

export default function App() {
  return (
    <>
      <Global styles={globalCSS} />
      <AppContainer>
        <SessionProvider>
          <Router>
            <Switch>
              <Route path="/login" component={Login} />
              <ProtectedRoute path="/income" component={Income} />
              <ProtectedRoute
                exact
                path={["/", "/expenses"]}
                component={Expenses}
              />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </SessionProvider>
      </AppContainer>
    </>
  );
}

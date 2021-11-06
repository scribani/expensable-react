import apiFetch from "./api_fetcher";

export const logIn = (email, password) =>
  apiFetch(
    "login",
    "POST",
    {
      "Content-Type": "application/json",
    },
    { email, password }
  );

export const logOut = (token) =>
  apiFetch("logout", "DELETE", {
    Authorization: `Token token=${token}`,
  });

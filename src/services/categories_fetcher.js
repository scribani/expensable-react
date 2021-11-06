import apiFetch from "./api_fetcher";

export const getCategories = (token) =>
  apiFetch("categories", "GET", {
    Authorization: `Token token=${token}`,
  });

export const deleteCategory = (token, id) =>
  apiFetch(`categories/${id}`, "DELETE", {
    Authorization: `Token token=${token}`,
  });

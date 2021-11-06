import { BASE_URL } from "../constants";

export default async function apiFetch(
  endpoint,
  method = "GET",
  headers,
  body
) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });
  if (response.status === 204) return response.statusText;

  const parsedResponse = await response.json();
  if (!response.ok) throw new Error(parsedResponse.errors[0]);

  return parsedResponse;
}

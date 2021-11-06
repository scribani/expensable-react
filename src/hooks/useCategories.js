import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../components/contexts/SessionContext";
import { getCategories } from "../services/categories_fetcher";
import { filterByTransactionType } from "../utils/filterCategories";

export default function useCategories(transactionType) {
  const { session, contextLogOut } = useContext(SessionContext);
  const categories = JSON.parse(sessionStorage.getItem(transactionType));
  const [data, setData] = useState(categories || []);

  async function fetchCategories() {
    try {
      const response = await getCategories(session.token);
      const filtered = filterByTransactionType(response);
      setData(filtered[transactionType]);
    } catch (error) {
      console.log("Invalid token", error);
      contextLogOut();
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return [data, setData];
}

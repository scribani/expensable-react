import CategoryCard from "../components/CategoryCard";
import MainContainer from "../components/MainContainer";
import Menu from "../components/Menu";
import { Heading2 } from "../components/UI/Typography";
import { EXPENSES } from "../constants";
import useCategories from "../hooks/useCategories";
import Grid from "../components/Grid";
import { TextButton } from "../components/UI/Buttons";
import { logOut } from "../services/session_fetcher";
import { useContext } from "react";
import { SessionContext } from "../components/contexts/SessionContext";

export default function Expenses() {
  const { session, contextLogOut } = useContext(SessionContext);
  const [expenses, setExpenses] = useCategories("expenses");

  function updateCategories(id) {
    const filtered = expenses.filter((category) => category.id !== id);
    setExpenses(filtered);
    sessionStorage.setItem("expenses", JSON.stringify(expenses));
  }

  async function handleLogOut() {
    try {
      await logOut(session.token);
      contextLogOut(session.token);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <MainContainer>
        <Heading2 color="var(--gray-2)">Expensable</Heading2>
        <Menu selected={EXPENSES} />

        <Grid>
          {expenses.map((category) => (
            <CategoryCard
              key={category.id}
              id={category.id}
              name={category.name}
              transactions={category.transactions}
              updateCategories={updateCategories}
            />
          ))}
        </Grid>
        <TextButton
          mtAuto
          type="secundary"
          text="Log out"
          onClick={handleLogOut}
        />
      </MainContainer>
    </>
  );
}

import useCategories from "../hooks/useCategories";
import CategoryCard from "../components/CategoryCard";
import MainContainer from "../components/MainContainer";
import { Heading2 } from "../components/UI/Typography";
import Menu from "../components/Menu";
import { INCOME } from "../constants";
import Grid from "../components/Grid";
import { TextButton } from "../components/UI/Buttons";
import { logOut } from "../services/session_fetcher";
import { useContext } from "react";
import { SessionContext } from "../components/contexts/SessionContext";

export default function Income() {
  const { session, contextLogOut } = useContext(SessionContext);
  const [income, setIncome] = useCategories("income");

  function updateCategories(id) {
    const filtered = income.filter((category) => category.id !== id);
    setIncome(filtered);
    sessionStorage.setItem("income", JSON.stringify(income));
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
        <Menu selected={INCOME} />

        <Grid>
          {income.map((category) => (
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

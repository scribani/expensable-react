import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { EXPENSES, INCOME } from "../constants";
import MenuTab from "./MenuTab";

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

export default function Menu({ selected }) {
  const history = useHistory();

  function goToCategories(page) {
    if (selected === page) return;

    history.push(`/${page}`);
  }

  return (
    <Container>
      <MenuTab
        text="Expenses"
        active={selected === EXPENSES}
        onClick={() => goToCategories(EXPENSES)}
      />
      <MenuTab
        text="Income"
        active={selected === INCOME}
        onClick={() => goToCategories(INCOME)}
      />
    </Container>
  );
}

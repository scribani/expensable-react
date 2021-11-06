import styled from "@emotion/styled";
import { useContext } from "react";
import { deleteCategory } from "../services/categories_fetcher";
import { SessionContext } from "./contexts/SessionContext";
import { TrashButton } from "./UI/Buttons";
import { ContentS, ContentXL, Heading5 } from "./UI/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 150px;
  gap: 20px;
  padding: 16px;
  color: var(--gray-2);
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default function CategoryCard({
  id,
  name,
  transactions,
  updateCategories,
}) {
  const { session } = useContext(SessionContext);
  const count = transactions.length;
  const suffix = count === 1 ? "transaction" : "transactions";
  const totalAmount = transactions.reduce((acc, curr) => acc + curr.amount, 0);

  async function onDelete() {
    await deleteCategory(session.token, id);
    updateCategories(id);
  }

  return (
    <Container>
      <FlexColumn>
        <Heading5>{name}</Heading5>
        <ContentS>{`${count} ${suffix}`}</ContentS>
      </FlexColumn>
      <ContentXL>{`$${totalAmount.toFixed(2)}`}</ContentXL>
      <TrashButton onClick={onDelete} />
    </Container>
  );
}

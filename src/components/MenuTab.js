import styled from "@emotion/styled";
import { Heading4 } from "./UI/Typography";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 30px;
  cursor: pointer;
  color: ${(props) => (props.active ? "var(--gray-2)" : "var(--gray-4)")};
  border-bottom: 2px solid
    ${(props) => (props.active ? "var(--blue-1)" : "var(--gray-4)")};
  &:hover {
    color: var(--blue-2);
    border-bottom: 2px solid var(--blue-2);
  }
`;

export default function MenuTab({ text, active, onClick }) {
  return (
    <Container active={active} onClick={onClick}>
      <Heading4>{text}</Heading4>
    </Container>
  );
}

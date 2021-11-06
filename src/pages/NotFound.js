import styled from "@emotion/styled";
import notFound from "../assets/not_found.gif";
import MainContainer from "../components/MainContainer";
import { Heading1, Heading3 } from "../components/UI/Typography";

const StyledImg = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export default function NotFound() {
  return (
    <MainContainer>
      <Heading1 color="var(--gray-2)">Error 404</Heading1>
      <Heading3 color="var(--gray-2)">Not Found</Heading3>
      <StyledImg src={notFound} alt="" />
    </MainContainer>
  );
}

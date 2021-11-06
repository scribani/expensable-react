import styled from "@emotion/styled";

export const Heading1 = styled.h1`
  font-size: 42px;
  line-height: 56px;
  color: ${(props) => props.color};
`;

export const Heading2 = styled.h2`
  font-size: 30px;
  line-height: 40px;
  color: ${(props) => props.color};
`;

export const Heading3 = styled.h3`
  font-size: 20px;
  line-height: 32px;
  color: ${(props) => props.color};
`;

export const Heading4 = styled.h4`
  font-size: 18px;
  line-height: 24px;
  color: ${(props) => props.color};
`;

export const Heading5 = styled.h5`
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.color};
`;

const P = styled.p`
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.color};
`;

export const ContentXL = styled(P)`
  font-size: 20px;
  line-height: 32px;
`;

export const ContentL = styled(P)`
  font-size: 18px;
  line-height: 24px;
`;

export const ContentM = styled(P)`
  font-size: 16px;
  line-height: 24px;
`;

export const ContentS = styled(P)`
  font-size: 14px;
  line-height: 24px;
`;

export const ContentXS = styled(P)`
  font-size: 12px;
  line-height: 16px;
`;

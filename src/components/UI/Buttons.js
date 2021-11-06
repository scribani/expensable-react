/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ContentL } from "./Typography";

const baseText = css`
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
`;
const baseIcon = css`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
`;
const primary = css`
  background: var(--blue-1);
  border: none;
  color: white;
  &:hover {
    background: var(--blue-2);
  }
`;
const secundary = css`
  background: white;
  border: 1px solid var(--blue-1);
  color: var(--blue-1);
  fill: var(--blue-1);
  &:hover {
    background: rgba(47, 128, 237, 0.1);
    color: var(--blue-2);
    border: 1px solid var(--blue-2);
    fill: var(--blue-2);
  }
`;

export const TextButton = ({ type, text, mtAuto, onClick }) => {
  const types = { primary, secundary };

  return (
    <button
      css={css`
        ${baseText};
        ${types[type]};
        margin-top: ${mtAuto ? "auto" : "none"};
      `}
      onClick={onClick}
    >
      <ContentL>{text}</ContentL>
    </button>
  );
};

export const TrashButton = ({ onClick }) => {
  return (
    <button
      css={css`
        ${baseIcon};
        ${secundary};
      `}
      onClick={onClick}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 2V0H15V2H20V4H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V4H0V2H5ZM4 4V18H16V4H4ZM7 7H9V15H7V7ZM11 7H13V15H11V7Z" />
      </svg>
    </button>
  );
};

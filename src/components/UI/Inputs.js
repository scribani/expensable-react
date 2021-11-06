import styled from "@emotion/styled";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 260px;
`;
const Label = styled.label`
  font-size: 14px;
  line-height: 24px;
  color: var(--gray-2);
`;
const InputElement = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: var(--gray-2);
  width: 100%;
  height: 40px;
  background: white;
  padding: 8px 16px;
  border: 1px solid var(--blue-1);
  border-radius: 8px;
  &:focus {
    outline: none;
  }
  &:active {
    border: 1px solid var(--blue-2);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  &::placeholder {
    color: var(--gray-4);
  }
`;

export const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  required,
  onChange,
}) => {
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <InputElement
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </InputContainer>
  );
};

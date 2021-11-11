import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 20;
  width: 20;
  opacity: 0;
  z-index: -1;
  position: absolute;
`;

const Label = styled.label`
  width: max-content;
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ disabled, theme }) =>
    disabled ? theme.CharacterSecoundary : theme.CharacterPrimary};
`;

const Icon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  font-size: 0.7em;
  background: ${({ theme }) => theme.PrimarySix};
  border-radius: 0.2em;
  color: ${({ theme }) => theme.naturalOne};
`;

const Indicator = styled.div`
  width: 1.2em;
  height: 1.2em;
  background: ${({ theme }) => theme.naturalThree};
  border: 1px solid ${({ theme }) => theme.naturalFive};
  border-radius: 0.2em;
  position: relative;

  ${Input}:checked + & {
    ${Icon} {
      visibility: visible;
    }
  }

  ${Input}:disabled:checked + & {
    ${Icon} {
      visibility: visible;
      background: rgba(0, 0, 0, 0);
      color: ${({ theme }) => theme.CharacterSecoundary};
    }
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default function Checkbox({
  value,
  checked,
  onChange,
  name,
  id,
  label,
  disabled,
}) {
  return (
    <Label htmlFor={id} disabled={disabled}>
      <Input
        id={id}
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <Indicator>
        <Icon>
          <FontAwesomeIcon icon="check" />
        </Icon>
      </Indicator>

      {label}
    </Label>
  );
}

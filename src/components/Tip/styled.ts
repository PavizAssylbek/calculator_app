import styled from 'styled-components';

export const StyledTip = styled.button`
  flex: 1 0 116px;
  margin: 10px;
  background: var(--color-very-dark);
  border-radius: var(--size-4);
  font-weight: var(--font-weight-600);
  font-size: var(--default-size);
  text-align: center;
  color: var(--color-white);
  padding: var(--size-4) 0;
  cursor: pointer;
  border: none;
  transition: background 200ms ease-in-out;
  &:hover {
    background: var(--color-mb-blue);
    color: var(--color-white);
  }
  &.active {
    background: var(--color-mb-blue);
    color: var(--color-white);
  }
`;

export const StyledInput = styled.input`
  width: 120px;
  flex: 1 0 116px;
  font-weight: var(--font-weight-600);
  font-size: var(--default-size);
  text-align: right;
  color: var(--color-grayish-cyan);
  padding-right: var(--size-16);
  margin: var(--size-10);
  background: var(--color-very-light-grayish-cyan);
  border-radius: var(--size-4);
  border: var(--size-2) solid var(--color-very-light-grayish-cyan);
  transition: border 150ms ease-in;
  &:focus {
    border: var(--size-2) solid var(--color-mb-blue);
    outline: 0 none;
  }
  &:hover {
    border: var(--size-2) solid var(--color-mb-blue);
    outline: 0 none;
  }
`;

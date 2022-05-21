import styled from 'styled-components';

export const StyledInput = styled.input<{
  bg?: string;
  borderColor?: string;
}>`
  width: 100%;
  height: var(--size-48);
  border-radius: var(--size-4);
  border: none;
  background: url(${(props) => props.bg}) no-repeat var(--size-16) center
    var(--color-very-light-grayish-cyan);
  background-size: var(--size-12);
  font-weight: var(--font-weight-600);
  font-size: var(--default-size);
  text-align: right;
  color: var(--color-very-dark);
  padding-right: var(--size-16);
  border: var(--size-2) solid ${(props) => props.borderColor};
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

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--size-8);
  font-weight: var(--font-weight-600);
  font-size: var(--size-16);
  line-height: var(--default-size);
  color: var(--color-dark-grayish);
`;

export const InputErrorText = styled.span`
  font-weight: var(--font-weight-600);
  font-size: var(--size-16);
  line-height: var(--default-size);
  text-align: right;
  color: var(--color-red);
`;

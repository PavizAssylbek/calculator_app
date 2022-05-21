import styled from 'styled-components';

export const StyledResultScreen = styled.div`
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 500px) {
    padding: 37px 22px;
  }

  @media (max-width: 920px) {
    min-height: 315px;
  }
`;

export const TipContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TipInfo = styled.div``;

export const TipTitle = styled.p`
  font-weight: var(--font-weight-600);
  font-size: var(--size-16);
  line-height: var(--default-size);
  color: var(--color-white);
`;

export const TipDescr = styled.small`
  font-weight: var(--font-weight-600);
  font-size: var(--size-12);
  color: var(--color-grayish-cyan);
`;

export const TipResultText = styled.p`
  font-weight: var(--font-weight-600);
  font-size: var(--size-48);
  text-align: right;
  letter-spacing: -1px;
  color: var(--color-mb-blue);
  @media (max-width: 500px) {
    font-size: var(--size-32);
  }
`;

export const TipResetButton = styled.button<{
  isDisabled?: boolean;
}>`
  width: 100%;
  background: ${(props) =>
    !props.isDisabled ? 'var(--color-mb-blue)' : 'var(--color-mb-green)'};
  mix-blend-mode: ${(props) => (!props.isDisabled ? '' : 'normal')};
  opacity: ${(props) => (!props.isDisabled ? '' : '.35')};
  user-select: ${(props) => (!props.isDisabled ? '' : 'none')};
  pointer-events: ${(props) => (!props.isDisabled ? '' : 'none')};
  border-radius: var(--size-4);
  border: none;
  padding: var(--size-10) 0;
  font-weight: var(--font-weight-600);
  font-size: 20px;
  text-align: center;
  color: var(--color-very-dark);
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 200ms ease;
  &:hover {
    background-color: var(--color-hover-btn);
  }
`;

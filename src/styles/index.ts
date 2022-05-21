import styled from 'styled-components';

export const ContainerDiv = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const WrapperDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  margin: 88px 0;
`;

export const CalculatorWrapper = styled.div`
  background: var(--color-white);
  padding: var(--size-32);
  width: 100%;
  max-width: 920px;
  box-shadow: 0px var(--size-32) 43px rgba(79, 166, 175, 0.200735);
  border-radius: var(--default-size);
  display: flex;

  @media (max-width: 500px) {
    padding: var(--size-32) var(--default-size);
  }
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const CalculatorLeft = styled.div`
  min-width: var(--size-378);
  margin-right: 50px;
  flex: 1;

  @media (max-width: 920px) {
    margin: 0 auto;
    min-width: 100%;
  }
`;

export const CalculatorRight = styled.div`
  min-width: var(--size-378);
  background: var(--color-very-dark);
  border-radius: 15px;
  flex: 1;

  @media (max-width: 920px) {
    min-width: 100%;
    margin-top: var(--size-32);
  }
`;

export const StyledTipContainer = styled.div`
  margin: 40px 0;

  @media (max-width: 500px) {
    margin: 20px 0;
  }

  h3 {
    font-weight: var(--font-weight-600);
    font-size: var(--size-16);
    line-height: var(--default-size);
    color: var(--color-dark-grayish);
    margin-bottom: 12px;
  }
  .tips {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: -10px;
  }
  input::-webkit-input-placeholder,
  input::-moz-placeholder,
  input:-ms-input-placeholder,
  input:-o-input-placeholder {
    font-weight: var(--font-weight-600);
    font-size: var(--default-size);
    text-align: right;
    color: var(--color-dark-grayish);
  }
`;

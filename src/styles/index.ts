import styled from 'styled-components';

export const ContainerDiv = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const WrapperDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerTitle = styled.div`
  margin-bottom: 88px;

  @media only screen and (max-width: 920px) {
    padding-top: 50px;
  }
`;

export const CalculatorWrapper = styled.div`
  background: var(--color-white);
  padding: var(--size-32);
  width: 100%;
  max-width: 920px;
  min-width: 360px;
  box-shadow: 0px var(--size-32) 43px rgba(79, 166, 175, 0.200735);
  border-radius: var(--default-size);
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    padding: var(--size-32) 24px;
  }
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const CalculatorLeft = styled.div`
  min-width: var(--size-378);
  margin-right: 50px;
  flex: 1;

  @media (max-width: 500px) {
    min-width: 0;
    width: 100%;
  }

  @media (max-width: 920px) {
    margin: 0 auto;
  }
`;

export const CalculatorRight = styled.div`
  min-width: var(--size-378);
  background: var(--color-very-dark);
  border-radius: 15px;
  min-height: 417px;
  flex: 1;
  position: relative;

  @media (max-width: 500px) {
    min-width: 0;
    width: 100%;
    min-height: 327px;
  }

  @media (max-width: 920px) {
    margin-top: var(--size-32);
  }
`;

export const StyledTipContainer = styled.div`
  margin: 40px 0;
  h3 {
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #5e7a7d;
    margin-bottom: 12px;
  }
  .tips {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-left: -10px;
  }
  input::-webkit-input-placeholder {
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-align: right;
    color: #547878;
  }
  input::-moz-placeholder {
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-align: right;
    color: #547878;
  }
  input:-ms-input-placeholder {
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-align: right;
    color: #547878;
  }
  input:-o-input-placeholder {
    font-family: Space Mono;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    text-align: right;
    color: #547878;
  }
`;

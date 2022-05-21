import styled from 'styled-components';

export const StyledInput = styled.input<{
  bg?: string;
  borderColor?: string;
}>`
  width: 100%;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: url(${(props) => props.bg}) no-repeat 17px center #f3f9fa;
  background-size: 13px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #00474b;
  padding-right: 17px;
  border: 2px solid ${(props) => props.borderColor};
  transition: border 150ms ease-in;
  &:focus {
    border: 2px solid #26c2ae;
    outline: 0 none;
  }
`;
export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #5e7a7d;
`;

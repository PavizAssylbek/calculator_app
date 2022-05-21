import styled from 'styled-components';

export const StyledTip = styled.div`
  flex: 1 0 116px;
  margin: 9px;
  background: #00474b;
  border-radius: 5px;
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  padding: 6px 0;
  cursor: pointer;
  transition: background 200ms ease-in-out;
  &:hover {
    background: #26c2ae;
    color: #000000;
  }
  &.active {
    background: #26c2ae;
    color: #000000;
  }
`;

export const StyledInput = styled.input`
  width: 120px;
  flex: 1 0 116px;
  font-family: Space Mono;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: right;
  color: #547878;
  padding: 0px 15px 0 0;
  margin: 9px;
  background: #f3f9fa;
  border-radius: 5px;
  border: 2px solid #f3f9fa;
  transition: border 150ms ease-in;
  &:focus {
    border: 2px solid #26c2ae;
    outline: 0 none;
  }
`;

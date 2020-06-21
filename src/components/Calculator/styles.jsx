import styled from '@emotion/styled';
import { Grid, Paper } from '@material-ui/core';

export const PageContainer = styled('div')`
  display: flex;
  justify-content: center;
`;

export const CalculatorContainer = styled('div')`
  display: flex;
  width: 400px;
  border: 1px solid black;
  min-height: 500px;
  background-color: #6b6b6b;
  box-shadow: 0px 0px 30px #000;
  -moz-box-shadow: 0px 0px 30px #000;
  -webkit-box-shadow: 0px 0px 30px #000;
`;

export const GridContainer = styled(Grid)`
  padding: 25px;
`;

export const DisplayBox = styled(Paper)`
  border: 1px solid black;
  height: 60px;
  width: 100%;
  font-size: 30px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
`;

export const ButtonRow = styled(Grid)`
  justify-content: space-evenly;
`;

import React from 'react';
import { Grid } from '@material-ui/core';
import { PageContainer, CalculatorContainer } from './styles';

const Calculator = () => {
  const buttonGroupings = [
    { groupOne: ['C', '+/-', '%', '/'] },
    { groupTwo: ['7', '9', '5', 'X'] },
    { groupThree: ['4', '8', '6', '-'] },
    { groupFour: ['1', '2', '3', '+'] },
    { groupFive: ['0', '.', '='] },
  ];

  const makeButtonGroup = (groupVals) => {
    const vals = Object.values(groupVals);
    return vals.map((val) => <Grid item>{val}</Grid>);
  };

  return (
    <PageContainer>
      <CalculatorContainer>
        <Grid container>123 input box</Grid>
        <Grid container>
          {buttonGroupings.map((groupObj) => (
            <Grid container item>
              {makeButtonGroup(groupObj)}
            </Grid>
          ))}
        </Grid>
      </CalculatorContainer>
    </PageContainer>
  );
};

export default Calculator;

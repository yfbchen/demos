import React from 'react';
import { Grid, Button } from '@material-ui/core';
import {
  PageContainer,
  CalculatorContainer,
  GridContainer,
  DisplayBox,
  ButtonRow,
} from './styles';

const Calculator = () => {
  const buttonGroupings = [
    ['C', '+/-', '%', '/'],
    ['7', '9', '5', 'X'],
    ['4', '8', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <PageContainer>
      <CalculatorContainer>
        <GridContainer container spacing={1}>
          <DisplayBox container item>
            123 input box
          </DisplayBox>
          {buttonGroupings.map((group, index) => (
            <ButtonRow container item spacing={1} key={index}>
              {group.map((val, index) => (
                <Grid item key={index}>
                  <Button variant="contained">{val}</Button>
                </Grid>
              ))}
            </ButtonRow>
          ))}
        </GridContainer>
      </CalculatorContainer>
    </PageContainer>
  );
};

export default Calculator;

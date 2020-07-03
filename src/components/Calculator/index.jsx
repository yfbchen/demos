import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import { useMachine } from '@xstate/react';
import { idle } from '../../constants/states';
import { createCalculatorMachine } from '../../machines/calculatorMachine/machine.js';
import {
  PageContainer,
  CalculatorContainer,
  GridContainer,
  DisplayBox,
  ButtonRow,
} from './styles';

const Calculator = () => {
  const [currentState, send] = useMachine(createCalculatorMachine());
  const [nextVal, updateNextVal] = useState(0);
  const { context } = currentState;

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
            {nextVal ? nextVal : context.storedValue}
          </DisplayBox>
          {buttonGroupings.map((group, index) => (
            <ButtonRow container item spacing={1} key={index}>
              {group.map((val, index) => (
                <Grid item key={index}>
                  <Button
                    variant="contained"
                    value={val}
                    onClick={(e) => updateNextVal(nextVal + e.target.value)}
                  >
                    {val}
                  </Button>
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

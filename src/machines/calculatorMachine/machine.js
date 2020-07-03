import { Machine } from 'xstate';
import { idle, pending, success, error } from '../../constants/states';
import { services } from './services';
import { actions } from './actions';
import { guards } from './guards';

export const machineJSON = () => ({
  initial: idle,
  context: {
    storedValue: '0',
    operator: '',
    nextValue: '0',
  },
  states: {
    [idle]: {},
    [pending]: {},
    [success]: {},
    [error]: {},
  },
});

const config = { services, actions, guards };

export const createCalculatorMachine = () =>
  Machine(machineJSON()).withConfig(config);

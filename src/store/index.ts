import { createStore, combineReducers, Action } from 'redux';
import counter, { CounterAction, CounterState } from './counter';

export default createStore(
  combineReducers({
    counter,
  }),
);

export interface State {
  counter: CounterState;
}

export type Action = CounterAction | Action;

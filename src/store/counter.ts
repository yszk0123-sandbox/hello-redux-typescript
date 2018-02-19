export interface CounterState {
  count: number;
}

export type CounterAction = any;

export default function counter(state: CounterState, action: CounterAction) {
  return state;
}

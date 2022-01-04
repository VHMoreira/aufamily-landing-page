declare interface CounterAction<T = string> extends Action {
  type: T
}

declare interface CounterState {
  count: number
}

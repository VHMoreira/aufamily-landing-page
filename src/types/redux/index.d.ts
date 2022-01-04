declare interface State{
  counter: CounterState
}

interface Action<T = null> {
  type: string
  payload?: T
}

type Reducer<S = any , P = null> = (state: S, action: Action<P>) =>  S 

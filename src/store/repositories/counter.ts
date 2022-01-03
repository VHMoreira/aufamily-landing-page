export enum actionTypes {
  INCREMENT_COUNTER='INCREMENT_COUNTER',
  DECREMENT_COUNTER='DECREMENT_COUNTER'
}

interface Action<T = null> {
  type: actionTypes
  payload?: T
}

type Reducer<S = any , P = null> = (state: S, action: Action<P>) =>  S 


export interface CounterState {
  count: number
}

export const incrementCounter = (): Action  => {
  return { type: actionTypes.INCREMENT_COUNTER }
} 

export const decrementCounter = (): Action => {
  return { type: actionTypes.DECREMENT_COUNTER }
} 

export const counterInitialState: CounterState = {
  count: 0
}

export const reducer: Reducer<CounterState> = (state = counterInitialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      }
      case actionTypes.DECREMENT_COUNTER:
        return {
          ...state,
          count: state.count - 1
        }
    default: 
      return state
  }
}

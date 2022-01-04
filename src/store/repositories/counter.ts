import { CounterTypes } from "helpers/enums/ActionTypes"

export const incrementCounter = (): CounterAction<CounterTypes>  => {
  return { type: CounterTypes.INCREMENT_COUNTER }
} 

export const decrementCounter = (): CounterAction<CounterTypes> => {
  return { type: CounterTypes.DECREMENT_COUNTER }
} 

export const counterInitialState: CounterState = {
  count: 0
}

export const reducer: Reducer<CounterState> = (state = counterInitialState, action) => {
  switch (action.type) {
    case CounterTypes.INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      }
      case CounterTypes.DECREMENT_COUNTER:
        return {
          ...state,
          count: state.count - 1
        }
    default: 
      return state
  }
}

import { applyMiddleware, createStore, Middleware } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { combineReducers } from '@reduxjs/toolkit'
import { CounterState, reducer as CounterReducer } from './repositories/counter'
import { composeWithDevTools } from 'redux-devtools-extension'

export interface State{
  counter: CounterState
}

const rootReducer = combineReducers({
  counter: CounterReducer
})

const bindMiddleware = (middleware?: Middleware[]) => {
  
  if(!middleware){
    return composeWithDevTools()
  }

  return composeWithDevTools(applyMiddleware(...middleware))
}

export const makeStore = () => {
  const store = createStore(rootReducer, bindMiddleware())
  return store
}

export default createWrapper(makeStore)

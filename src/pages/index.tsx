import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from 'store/repositories/counter'

const Home: NextPage = () => {
  const { count } = useSelector(({counter: {count}}: State) => ({
    count
  }))
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(decrementCounter())}>remove</button>
      <span>{count}</span>
      <button onClick={() => dispatch(incrementCounter())}>add</button>
    </div>
  )
}

export default Home

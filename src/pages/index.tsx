import type { NextPage } from 'next'
import { useDispatch, useSelector } from 'react-redux'
import { State } from 'src/store'
import { decrementCounter, incrementCounter } from 'src/store/repositories/counter'

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

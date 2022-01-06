import { Button } from "components/Button"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrementCounter, incrementCounter } from "store/repositories/counter"

const Home: React.FC = () => {
  const { count } = useSelector(({counter: {count}}: State) => ({
    count
  }))
  const dispatch = useDispatch()
  return (
    <div>
      <Button 
        onClick={() => dispatch(decrementCounter())} 
        width='200px' 
        outline 
        borderColor="secondary" 
      >
        remove
      </Button>
      <span>{count}</span>
      <Button 
        onClick={() => dispatch(incrementCounter())}
      >
        add
      </Button>
    </div>
  )
}

export default Home

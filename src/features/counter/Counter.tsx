import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Button } from '../../components/ui/button'
import { increment, decrement, incrementByAmount } from './counterSlice'

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>Counter: {count}</h1>
      <Button variant="outline" onClick={() => dispatch(decrement())}>-</Button>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(incrementByAmount(5))}>+5</Button>
    </div>
  )
}
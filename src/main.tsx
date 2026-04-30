import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Counter from './learn-hooks/Counter'
import SimpleForm from './learn-hooks/SimpleForm'
import WereWolf from './learn-hooks/Werewolf'
import TimerCounter from './learn-hooks/TimerCounter'
import FocusInput from './learn-hooks/FocusInput'
import CounterWithRef from './learn-hooks/CounterWithRef'
import Stopwatch from './learn-hooks/Stopwatch'
import ExpensiveComponent from './learn-hooks/ExpensiveComponent'
import MemoizedComponent from './learn-hooks/MemoizedComponent'
import UserProfile from './learn-hooks/UserProfile'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Counter></Counter>
    <SimpleForm></SimpleForm>
    <WereWolf></WereWolf>
    <TimerCounter></TimerCounter>
    <FocusInput></FocusInput>
    <CounterWithRef></CounterWithRef>
    <Stopwatch></Stopwatch>
    <ExpensiveComponent></ExpensiveComponent>
    <MemoizedComponent></MemoizedComponent>
    <UserProfile></UserProfile>
  </StrictMode>,
)

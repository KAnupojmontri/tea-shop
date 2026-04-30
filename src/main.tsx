import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloVariable from './learn-component/HelloVariable.tsx'
import ConditionalExample from './learn-component/ConditionalExample.tsx'
import ShowBadge from './learn-component/ShowBadge.tsx'
import UserList from './learn-component/UserList.tsx'
import PremiumFeature from './learn-component/PremiumFeature.tsx'
import DeleteButton from './learn-component/DeleteButton.tsx'
import MyCard from './learn-component/MyCard.tsx'

const users = [
      { id: 1, name: "R" },
      { id: 2, name: "S" },
      { id: 3, name: "C" },
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <HelloVariable name={"P"} age={26}/>
    <HelloVariable name={"H"} age={29} verify={true} />
    <HelloVariable name={"A"} age={91} verify={false} />
    <ConditionalExample isLoggedIn={false}/>
    <ConditionalExample isLoggedIn={true}/>
    <ShowBadge badge='sale'/>
    <PremiumFeature isPremium={false}/>
    <PremiumFeature isPremium={true}/>
    <UserList users={users} />
    <DeleteButton onDelete={(id: number) => {
      alert(`Deleted id: ${id}`)
    }}/>
    <MyCard title="Profiles" footer={<HelloVariable name={"H"} age={29} verify={true} />}>
      <h1>name : Petch</h1>
      <p>age : 26</p>
      <p>type: dragon</p>
    </MyCard>
  </StrictMode>,
)

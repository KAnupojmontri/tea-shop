import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HelloVariable from './HelloVariable.tsx'
import ConditionalExample from './ConditionalExample.tsx'
import ShowBadge from './ShowBadge.tsx'
import UserList from './UserList.tsx'
import PremiumFeature from './PremiumFeature.tsx'
import DeleteButton from './DeleteButton.tsx'
import MyCard from './MyCard.tsx'

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

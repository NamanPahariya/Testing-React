import React, { useMemo, useState } from 'react'

const Child = React.memo(
    function Child({user}){
    console.log("I will render inside the child component")
    return <h1>{user.userName} {user.age}</h1>
}
)



const TestMemo = () => {
    const [count, setCount] = useState(0);
    console.log("I will render each time when state gets changed")
   
    const user = useMemo(()=>{
        return {userName:"Naman", age:23}
    },[])

  return (
    <div>
        {count}
      <button onClick={()=> setCount(count + 1)}>CLick me!</button>
      <Child user={user}/>
    </div>
  )
}

export default TestMemo

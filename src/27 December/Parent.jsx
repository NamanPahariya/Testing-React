import React, { useContext } from 'react'
import Child from './Child'
import UserContext from '../UserContext'

const Parent = () => {
    const isAuthenticated = useContext(UserContext);
  return (
    <div>
        Parent Component
     { isAuthenticated && <Child/> }
    </div>
  )
}

export default Parent

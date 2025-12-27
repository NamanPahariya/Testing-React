import React, { useContext } from 'react'
import UserContext from '../UserContext'

const Child = () => {
    const userName = useContext(UserContext)
  return (
    <div>
      Child Component : {userName}
    </div>
  )
}

export default Child

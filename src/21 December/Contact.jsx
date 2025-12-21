import React from 'react'
import { Link, useNavigate } from 'react-router'

const Contact = () => {

    const navigate = useNavigate(); 

   const handleClick = () =>{
      navigate('/career')
   }

  return (
    <div>
      Contact Page
      {/* <br/>
      <a href="/career" className='text-[#646cff]'>click on this to navigate to career page</a> <br />
      <Link to="/career" className='text-yellow-200'>click on this to navigate to career page </Link> <br />
      <button onClick={handleClick}>click on this to navigate to career page </button> */}
    </div>
  )
}

export default Contact

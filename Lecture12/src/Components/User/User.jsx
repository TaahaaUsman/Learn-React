import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-blue-500 p-6 text-white text-3xl my-28 text-center'>
        User{userid}
    </div>
  )
}

export default User
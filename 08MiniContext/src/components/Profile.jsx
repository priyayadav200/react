import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)
  if(!user){
    return <h1>Please Login to see Profile</h1>
  }
  return <div>Welcome {user.username}</div>
}

export default Profile

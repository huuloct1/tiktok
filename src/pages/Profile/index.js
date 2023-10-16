import React from 'react'
import User from '~/components/Profile/User'
import { useLocation } from 'react-router-dom'

const Profile = () => {
  let { state } = useLocation()

  return (
    <div>
      <User data={state} />
    </div>
  )
}

export default Profile

import React, { useState } from 'react'
import { Button, Space } from 'antd'

const Session5Screen = (props) => {

  const {profile} = props

  const [number, setNumber] = useState(0)
  const [myProfile, setMyProfile] = useState(profile);

  // npm install --global yarn

  const handaleChangeProfile = () => {
    const newProfile = {
      ...myProfile,
      name: 'new name 2'
    }

    setMyProfile(newProfile)
    
  }

  return (
    <div>
      
      <h2>{`My name is: ${myProfile.name}, and my year old is: ${myProfile.age}`}</h2>
      <Space>

      
      <Button onClick={handaleChangeProfile}>Change Profile</Button>
      </Space>
    </div>
  )
}

export default Session5Screen

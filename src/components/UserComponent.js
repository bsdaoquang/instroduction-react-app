import React, { useEffect, useState } from 'react'
import { users } from '../datas/posts';
import { Avatar, Space } from 'antd';
import TextComponent from './TextComponent';

function UserComponent({ uid })
{

  const [profile, setProfile] = useState();

  useEffect(() =>
  {
    getProfile()
  }, [uid])

  const getProfile = () =>
  {
    const item = users.find(element => element.id === uid)

    item && setProfile(item)
  }

  return (
    profile ? <Space style={{ marginBottom: 12 }}>
      <Avatar>{profile.name.substring(0, 1)}</Avatar>
      <div>
        <TextComponent text={profile.name} />
        <TextComponent text={profile.email} size={12} />
      </div>
    </Space> : <></>
  )
}

export default UserComponent
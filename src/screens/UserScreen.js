import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { users } from '../datas/posts';

function UserScreen()
{
  const [userDetail, setUserDetail] = useState();

  const params = useParams()

  const id = (params.id)

  useEffect(() =>
  {
    getUserDetail()
  }, [id])

  const getUserDetail = () =>
  {
    const item = users.find(element => element.id === parseInt(id))

    if (item) {
      setUserDetail(item)
    }
  }

  console.log(userDetail)


  return userDetail ? (
    <div>

      <h1>{userDetail.email}</h1>

    </div>
  ) : <></>
}

export default UserScreen
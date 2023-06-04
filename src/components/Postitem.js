import { Card, Divider, Space } from 'antd'
import React from 'react'
import TextComponent from '../components/TextComponent'
import UserComponent from './UserComponent'
import CommentComponent from './CommentComponent'

function Postitem({ item })
{
  return (
    <Card style={{
      margin: '10px 0'
    }}>
      <UserComponent uid={item.userId} />
      <TextComponent text={item.title} />

      <Divider />
      <CommentComponent />
    </Card>
  )
}

export default Postitem
import { Card, Divider, Space } from 'antd'
import React, { useContext } from 'react'
import TextComponent from '../components/TextComponent'
import UserComponent from './UserComponent'
import CommentComponent from './CommentComponent'
import ThemeContext from '../contexts/themeContext'

function Postitem({ item })
{

  const themeContext = useContext(ThemeContext)

  return (
    <Card style={{
      margin: '10px 0',
      backgroundColor: themeContext.theme === 'light' ? '#fff' : '#1e1f23',

    }} bordered={false}>
      <UserComponent uid={item.userId} />
      <TextComponent text={item.title} />

      <Divider />
      <CommentComponent />
    </Card>
  )
}

export default Postitem
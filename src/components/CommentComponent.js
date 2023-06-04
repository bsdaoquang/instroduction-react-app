import { Avatar, Input, Space } from 'antd'
import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../contexts/themeContext'

function CommentComponent()
{

  const themeContext = useContext(ThemeContext)
  return (
    <Space>
      <Avatar>Me</Avatar>

      <Input bordered={false} placeholder='what do you think about that?' style={{ width: '100%', borderRadius: 100, backgroundColor: themeContext.theme === 'light' ? '#f3f3f3' : '#27282f' }} />

    </Space>

  )
}

export default CommentComponent
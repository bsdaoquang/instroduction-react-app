import { Avatar, Input, Space } from 'antd'
import React from 'react'

function CommentComponent()
{
  return (
    <Space>
      <Avatar>Me</Avatar>

      <Input placeholder='what do you think about that?' style={{ width: '100%', borderRadius: 100 }} />

    </Space>

  )
}

export default CommentComponent
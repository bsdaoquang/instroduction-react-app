import { List } from 'antd'
import React from 'react'
import { posts } from '../datas/posts'
import Postitem from '../components/Postitem'

function Session9UseContext()
{
  return (
    <div style={{
      padding: 20,
      height: '100%',
      overflow: 'scroll',
      backgroundColor: '#fafafa'
    }}>
      <List dataSource={posts} renderItem={(item) => <Postitem item={item} />
      } />
    </div>
  )
}

export default Session9UseContext
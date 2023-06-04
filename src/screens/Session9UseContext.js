import { List } from 'antd'
import React, { useContext } from 'react'
import { posts } from '../datas/posts'
import Postitem from '../components/Postitem'
import ThemeContext from '../contexts/themeContext'

function Session9UseContext()
{

  const themeContext = useContext(ThemeContext)

  return (
    <div style={{
      padding: 20,
      height: '100%',
      overflow: 'scroll',
      backgroundColor: themeContext.theme === 'light' ? '#fafafa' : '#17181c'
    }}>
      <List dataSource={posts} renderItem={(item) => <Postitem item={item} />
      } />
    </div>
  )
}

export default Session9UseContext
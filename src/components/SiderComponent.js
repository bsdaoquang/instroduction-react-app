import { Layout, Space } from 'antd'
import React, { useContext } from 'react'
import ThemeContext from '../contexts/themeContext'
import { Link } from 'react-router-dom'

const { Sider } = Layout

function SiderComponent()
{

  const themeContext = useContext(ThemeContext)

  return <Sider theme='light'>

    <div>

      <Link to='/'>Home</Link><br />
      <Link to='/session-9'>Session 9</Link> <br />
      <Link to='/session-8'>Session 8</Link> <br />
      <Link to='/profile'>Profile</Link> <br />
      <Link to='/profile/profile-detail'>Profile detail</Link>
    </div>


  </Sider>
}

export default SiderComponent
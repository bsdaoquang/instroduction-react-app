import { Layout } from 'antd'
import React, { useContext } from 'react'
import ThemeContext from '../contexts/themeContext'

const { Sider } = Layout

function SiderComponent()
{

  const themeContext = useContext(ThemeContext)

  return <Sider style={{ backgroundColor: themeContext.theme === 'light' ? '#fafafa' : '#1e1f23' }} />
}

export default SiderComponent
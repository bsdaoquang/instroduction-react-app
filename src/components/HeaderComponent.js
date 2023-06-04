import { Layout, Switch } from 'antd'
import React, { useContext } from 'react'
import ThemeContext from '../contexts/themeContext'

const { Header } = Layout

function HeaderComponent()
{

  const themeContext = useContext(ThemeContext)

  const handeChangeTheme = (val) =>
  {
    themeContext.setTheme(val ? 'light' : 'dark')
  }

  return (

    <Header style={{ backgroundColor: themeContext.theme === 'light' ? '#fff' : '#17181c' }}>
      <div className='row'>
        <div className='col'>
          <div className='text-right'>
            <Switch checkedChildren='Light' checked={themeContext.theme === 'light' ? true : false} unCheckedChildren='Dark' onChange={val => handeChangeTheme(val)} />
          </div>
        </div>
      </div>
    </Header>

  )
}

export default HeaderComponent
import { Layout, Switch } from 'antd'
import React from 'react'

const { Header } = Layout

function HeaderComponent({ subTitle })
{
  return (

    <Header style={{ backgroundColor: '#fff' }}>
      <div className='row'>
        <div className='col'>
          <div className='text-right'>
            <Switch checkedChildren='Light' unCheckedChildren='Dark' />
          </div>
        </div>
      </div>
    </Header>

  )
}

export default HeaderComponent
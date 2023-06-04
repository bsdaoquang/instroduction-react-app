import 'antd/dist/reset.css'
import './App.css'
import Session8UseEffect from './screens/Session8UseEffect'
import Session8UseEffectCallApi from './screens/Session8UseEffectCallApi'
import { Layout } from 'antd'
import { SiderComponent, HeaderComponent } from './components'
import Session9UseContext from './screens/Session9UseContext'
import ThemeContext from './contexts/themeContext'
import { useState } from 'react'

const { Sider, Content } = Layout

function App()
{

  const [theme, setTheme] = useState({ theme: 'light' });

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <Layout style={{
        backgroundColor: '#17181c',
        height: '100vh'
      }}>
        <HeaderComponent />
        <Layout>

          <SiderComponent />
          <Content>
            <Session9UseContext />
          </Content>
          <SiderComponent />


        </Layout>
      </Layout>
    </ThemeContext.Provider>

  )
}

export default App

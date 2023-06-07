import 'antd/dist/reset.css'
import './App.css'
import Session8UseEffect from './screens/Session8UseEffect'
import Session8UseEffectCallApi from './screens/Session8UseEffectCallApi'
import { Layout } from 'antd'
import { SiderComponent, HeaderComponent } from './components'
import Session9UseContext from './screens/Session9UseContext'
import Session7ListAndMap from './screens/Session7ListAndMap'
import ThemeContext from './contexts/themeContext'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import Profile from './screens/Profile'
import ProfileDetail from './screens/ProfileDetail'
import UserScreen from './screens/UserScreen'

const { Sider, Content } = Layout

function App()
{

  const [theme, setTheme] = useState({ theme: 'light' });

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>

        <Layout style={{
          backgroundColor: '#17181c',
          height: '100vh'
        }}>
          <HeaderComponent />
          <Layout>

            <SiderComponent />
            <Content>
              <Routes>
                <Route path='/' element={<Session7ListAndMap />} />
                <Route path='/session-9' element={<Session9UseContext />} />
                <Route path='/session-8' element={<Session8UseEffect />} />
                <Route path='user'>
                  <Route path=':id' element={<UserScreen />} />
                </Route>
                <Route path='/profile' element={<Profile />}>
                  <Route path='/profile-detail' element={<ProfileDetail />} />
                </Route>
                <Route path='*' element={<HomeScreen />} />
              </Routes>
            </Content>
            <SiderComponent />
          </Layout>
        </Layout>

      </ThemeContext.Provider >
    </BrowserRouter>

  )
}

export default App

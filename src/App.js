import 'antd/dist/reset.css'
import './App.css'
import Session8UseEffect from './screens/Session8UseEffect'
import Session8UseEffectCallApi from './screens/Session8UseEffectCallApi'
import { Layout } from 'antd'
import HeaderComponent from './components/HeaderComponent'
import Session9UseContext from './screens/Session9UseContext'

const { Sider, Content } = Layout

function App()
{
  return (
    <Layout style={{
      backgroundColor: '#17181c',
      height: '100vh'
    }}>
      <HeaderComponent />
      <Layout>

        <Sider style={{ backgroundColor: '#fafafa' }} />
        <Content>
          <Session9UseContext />
        </Content>
        <Sider style={{ backgroundColor: '#fafafa' }} />

      </Layout>
    </Layout>
  )
}

export default App

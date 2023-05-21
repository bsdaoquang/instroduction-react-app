import 'antd/dist/reset.css'
import './App.css'
import Session5Screen from './screens/Session5Screen'

function App() {

  const profile = {
    name: 'MindX',
    age: 24
  }

  return (
    <div className="container mt-4">
      <Session5Screen profile={profile} />
    </div>
  )
}

export default App

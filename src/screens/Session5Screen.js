import React, { useState } from 'react'
import { Button, Space } from 'antd'

const Session5Screen = () => {

  const [number, setNumber] = useState(0)

  

  return (
    <div>
      <h1>{number}</h1>

      <Space>

       <Button danger type='primary' 
        onClick={() => setNumber(number - 1)} >
        -1
      </Button> 

      <Button type='primary' 
        onClick={() => setNumber(number + 1)}>
        +1
      </Button>

      </Space>
    </div>
  )
}

export default Session5Screen

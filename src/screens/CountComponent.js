
import React from 'react'
import { Card, Button, Space } from 'antd'

function CountComponent({ title, count, onIncrease, onDecrease, onReset })
{
  return (
    <div className='col'>

      <Card>
        <div className='text-center'>
          <h1>{`${title}: ${10 - count}`}</h1>

          <Space>

            <Button onClick={onDecrease}>-</Button>
            <Button onClick={onReset}>reset</Button>
            <Button onClick={onIncrease}>+</Button>

          </Space>

        </div>
      </Card>
    </div>
  )
}

export default CountComponent
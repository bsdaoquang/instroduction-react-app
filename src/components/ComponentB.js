import { Button } from 'antd'
import React from 'react'

function ComponentB(props) {
  const { name, sayHello } = props

  return (
    <>
      <Button onClick={() => sayHello(name)}>Say Hello</Button>
    </>
  )
}

export default ComponentB

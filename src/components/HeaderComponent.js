import React from 'react'

function HeaderComponent({ subTitle })
{
  return (
    <div className='text-center' style={{ marginTop: 20 }}>
      <h1>React custom hooks</h1>
      <h5>{subTitle}</h5>
    </div>
  )
}

export default HeaderComponent
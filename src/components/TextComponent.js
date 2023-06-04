import React from 'react'

function TextComponent({ text, size })
{
  return (
    <p style={{
      fontSize: size ?? 16,
      margin: 0
    }}>{text}</p>
  )
}

export default TextComponent
import React, { useContext } from 'react'
import ThemeContext from '../contexts/themeContext'

function TextComponent({ text, size })
{

  const themeContext = useContext(ThemeContext)

  return (
    <p style={{
      fontSize: size ?? 16,
      margin: 0,
      color: themeContext.theme === 'light' ? '#212121' : '#fafafa'
    }}>{text}</p>
  )
}

export default TextComponent
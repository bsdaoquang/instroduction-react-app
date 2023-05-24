import React, { useEffect, useState } from 'react'
import { Button, Input, message } from 'antd'
import { onValue, push, ref } from 'firebase/database'
import { db } from '../firebase/firebaseConfig'

function HomeScreen() {
  const [content, setContent] = useState('')
  const [conversations, setConversations] = useState()

  const hanleSendContent = () => {
    push(ref(db, `/conversations`), {
      content,
      createdAt: Date.now(),
    }).then(() => message.success('đã gửi'))
  }

  useEffect(() => {
    onValue(ref(db, 'conversations'), (snap) => {
      if (snap.val()) {
        const items = []

        snap.forEach((item) => {
          items.push({
            key: item.key,
            ...item.val(),
          })
        })

        setConversations(items)
      }
    })
  }, [])

  // console.log('fhajgfshj')

  console.log(conversations)

  return (
    <div className="col-8 offset-2">
      <Input
        placeholder="text"
        value={content}
        onChange={(val) => setContent(val.target.value)}
        allowClear
      />

      <Button onClick={hanleSendContent}>Send</Button>
    </div>
  )
}

export default HomeScreen

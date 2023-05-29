'use client'

import { FC, useEffect, useRef, useState } from 'react'
import { FullMessageType } from '@/app/types'
import useConversation from '@/app/hooks/useConversation'
import MessageBox from '@/app/conversations/components/MessageBox'
import axios from 'axios'

interface Props {
  initialMessages: FullMessageType[]
}

const Body: FC<Props> = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages)
  const bottomRef = useRef(null)

  const { conversationId } = useConversation()

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`)
  }, [conversationId])

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, index) => (
        <MessageBox
          key={message.id}
          isLast={index === messages.length - 1}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  )
}

export default Body

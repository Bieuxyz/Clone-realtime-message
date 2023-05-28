import React, { FC, PropsWithChildren } from 'react'
import Sidebar from '@/app/components/sidebar/Sidebar'
import ConversationList from '@/app/conversations/components/ConversationList'
import getConversations from '@/app/actions/getConversations'

const ConversationsLayout = async ({ children }: PropsWithChildren) => {
  const conversations = await getConversations()

  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  )
}

export default ConversationsLayout

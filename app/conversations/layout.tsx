import React, { PropsWithChildren } from 'react'
import Sidebar from '@/app/components/sidebar/Sidebar'
import ConversationList from '@/app/conversations/components/ConversationList'
import getConversations from '@/app/actions/getConversations'
import getUsers from '@/app/actions/getUsers'

const ConversationsLayout = async ({ children }: PropsWithChildren) => {
  const conversations = await getConversations()
  const users = await getUsers()
  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <ConversationList users={users} initialItems={conversations} />
        {children}
      </div>
    </Sidebar>
  )
}

export default ConversationsLayout

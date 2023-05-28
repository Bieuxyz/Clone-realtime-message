'use client'

import React, { FC, useMemo } from 'react'
import { Conversation, User } from '@prisma/client'
import { useOtherUser } from '@/app/hooks/useOtherUser'

interface Props {
  conversation: Conversation & { users: User[] }
}
const Header: FC<Props> = ({ conversation }) => {
  const otherUser = useOtherUser(conversation)

  const statusTet = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`
    }
    return 'Active'
  }, [conversation.isGroup, conversation.users.length])

  return (
    <div className="bg-white w-full flex border-b sm:px04 py-3 px-4 lg:px-6 justify-between items-center shadow-sm">
      <div className="flex gap-3 items-center">
        Header
      </div>
    </div>
  )
}

export default Header

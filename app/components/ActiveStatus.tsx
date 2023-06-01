'use client'

import { FC } from 'react'
import useActiveChannel from '@/app/hooks/useActiveChannel'

const ActiveStatus: FC = () => {
  useActiveChannel()

  return null
}

export default ActiveStatus

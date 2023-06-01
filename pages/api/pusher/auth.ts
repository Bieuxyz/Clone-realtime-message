import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'

import { pusherSever } from '@/app/libs/pusher'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

const handler = async (request: NextApiRequest, reponse: NextApiResponse) => {
  const session = await getServerSession(request, reponse, authOptions)

  if (!session?.user?.email) {
    return reponse.status(401)
  }

  const socketId = request.body.socket_id
  const channel = request.body.channel_name
  const data = {
    user_id: session.user.email,
  }

  const authResponse = pusherSever.authorizeChannel(socketId,channel,data)

  return reponse.send(authResponse)
}

export default handler

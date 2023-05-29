import getSession from '@/app/actions/getSession'
import prisma from '@/app/libs/prismadb'

const getUser = async () => {
  const session = await getSession()

  if (!session?.user?.email) {
    return []
  }

  try {
    return await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    })
  } catch (error) {
    return []
  }
}

export default getUser

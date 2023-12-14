import { compare } from 'bcryptjs'
import prismaClient from '../../prisma'

interface AuthRequest {
  email: string
  password: string
}

class AuthUserService {
  async execute ({ email, password }: AuthRequest) {
    const user = await prismaClient.user.findFirst({
      where: {
        email
      }
    })

    if (!user) {
      throw new Error('Email or Password incorrect')
    }

    const passwordMath = await compare(password, user.password)

    if (!passwordMath) {
      throw new Error('Email or Password incorrect')
    }

    return { ok: true }
  }
}

export default new AuthUserService()

import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import prismaClient from '../../prisma'

interface AuthRequest {
  email: string
  password: string
}

export default {
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

    const token = sign({
      name: user.name,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      subject: user.id,
      expiresIn: '30d'
    })

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token
    }
  }
}

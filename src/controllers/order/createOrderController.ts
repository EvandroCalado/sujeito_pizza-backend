import { type Request, type Response } from 'express'
import prismaClient from '../../prisma'
import createOrderService from '../../services/order/createOrderService'

export default {
  async handle (req: Request, res: Response) {
    const { table } = req.body

    const { user_id } = req

    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id
      }
    })

    if (!user) {
      throw new Error('Name is required')
    }

    const order = await createOrderService.execute({ table, name: user.name })

    return res.json(order)
  }
}

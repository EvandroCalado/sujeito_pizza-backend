import { type Request, type Response } from 'express'
import addOrderItemService from '../../services/order/addOrderItemService'

export default {
  async handle (req: Request, res: Response) {
    const { order_id, product_id, amount } = req.body

    const order = await addOrderItemService.execute({ order_id, product_id, amount })

    return res.json(order)
  }
}

import { type Request, type Response } from 'express';
import deleteOrderService from '../../services/order/DeleteOrderService';

export default {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const order = await deleteOrderService.execute({ order_id });

    return res.json(order);
  },
};

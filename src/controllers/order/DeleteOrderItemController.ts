import { type Request, type Response } from 'express';
import deleteOrderItemService from '../../services/order/DeleteOrderItemService';

export default {
  async handle(req: Request, res: Response) {
    const orderItem_id = req.query.orderItem_id as string;

    const orderItem = await deleteOrderItemService.execute({ orderItem_id });

    return res.json(orderItem);
  },
};

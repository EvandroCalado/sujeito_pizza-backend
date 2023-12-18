import { Request, Response } from 'express';
import DetailOrderService from '../../services/order/DetailOrderService';

export default {
  async handle(req: Request, res: Response) {
    const order_id = req.query.order_id as string;

    const order = await DetailOrderService.execute({ order_id });

    return res.json(order);
  },
};

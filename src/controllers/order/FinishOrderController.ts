import { Request, Response } from 'express';
import FinishOrderService from '../../services/order/FinishOrderService';

export default {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;

    const order = await FinishOrderService.execute({ order_id });

    return res.json(order);
  },
};

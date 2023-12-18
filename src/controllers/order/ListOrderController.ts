import { Request, Response } from 'express';
import ListOrderService from '../../services/order/ListOrderService';

export default {
  async handle(req: Request, res: Response) {
    const orders = await ListOrderService.execute();

    return res.json(orders);
  },
};

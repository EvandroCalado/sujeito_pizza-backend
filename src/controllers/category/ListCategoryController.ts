import { type Request, type Response } from 'express';
import listCategoryService from '../../services/category/ListCategoryService';

export default {
  async handle(req: Request, res: Response) {
    const categories = await listCategoryService.execute();

    return res.json(categories);
  },
};

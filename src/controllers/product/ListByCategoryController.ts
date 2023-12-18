import { type Request, type Response } from 'express';
import listByCategoryService from '../../services/product/ListByCategoryService';

export default {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const productsByCategory = await listByCategoryService.execute({
      category_id,
    });

    if (productsByCategory.length === 0) {
      throw new Error('Category empty');
    }

    return res.json(productsByCategory);
  },
};

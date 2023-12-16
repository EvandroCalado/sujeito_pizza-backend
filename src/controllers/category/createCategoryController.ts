import { type Request, type Response } from 'express';
import createCategoryService from '../../services/category/createCategoryService';

export default {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const category = await createCategoryService.execute({ name });

    return res.json(category);
  },
};

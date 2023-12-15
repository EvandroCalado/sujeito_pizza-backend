import { type Request, type Response } from 'express'
import listCategoryService from '../../services/category/listCategoryService'

export default {
  async handle (req: Request, res: Response) {
    const categories = await listCategoryService.execute()

    return res.json(categories)
  }
}

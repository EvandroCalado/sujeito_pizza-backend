import { type Request, type Response } from 'express'
import createProductService from '../../services/product/createProductService'

export default {
  async handle (req: Request, res: Response) {
    const { name, price, description, category_id } = req.body

    if (!req.file) {
      throw new Error('Upload file required')
    }

    const { filename: banner } = req.file

    const product = await createProductService.execute({
      name,
      price,
      description,
      banner,
      category_id
    })

    return res.json(product)
  }
}

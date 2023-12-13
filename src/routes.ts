import { Router, type Request, type Response } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  return res.json({ nome: 'Sujeito Pizza' })
})

export default router

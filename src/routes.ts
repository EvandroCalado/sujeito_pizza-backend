import { Router } from 'express'
import AuthUserController from './controllers/user/AuthUserController'
import CreateUserController from './controllers/user/CreateUserController'

const router = Router()

router.post('/users', CreateUserController.handle)
router.post('/session', AuthUserController.handle)

export default router

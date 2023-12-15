import { Router } from 'express'
import AuthUserController from './controllers/user/AuthUserController'
import CreateUserController from './controllers/user/CreateUserController'
import DetailUserController from './controllers/user/DetailUserController'
import isAuthenticated from './middlewares/isAuthenticated'

const router = Router()

router.post('/users', CreateUserController.handle)
router.post('/users/session', AuthUserController.handle)
router.get('/users/me', isAuthenticated, DetailUserController.handle)

export default router

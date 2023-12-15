import { Router } from 'express'
import createCategoryController from './controllers/category/createCategoryController'
import listCategoryController from './controllers/category/listCategoryController'
import AuthUserController from './controllers/user/AuthUserController'
import CreateUserController from './controllers/user/CreateUserController'
import DetailUserController from './controllers/user/DetailUserController'
import isAuthenticated from './middlewares/isAuthenticated'

const router = Router()

router.post('/users', CreateUserController.handle)
router.post('/users/session', AuthUserController.handle)
router.get('/users/me', isAuthenticated, DetailUserController.handle)

router.get('/categories', isAuthenticated, listCategoryController.handle)
router.post('/categories', isAuthenticated, createCategoryController.handle)

export default router

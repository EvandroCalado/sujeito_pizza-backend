import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import createCategoryController from './controllers/category/createCategoryController'
import listCategoryController from './controllers/category/listCategoryController'
import createProductController from './controllers/product/createProductController'
import listByCategoryController from './controllers/product/listByCategoryController'
import AuthUserController from './controllers/user/AuthUserController'
import CreateUserController from './controllers/user/CreateUserController'
import DetailUserController from './controllers/user/DetailUserController'
import isAuthenticated from './middlewares/isAuthenticated'

const router = Router()
const upload = multer(multerConfig.upload('./tmp'))

router.post('/users', CreateUserController.handle)
router.post('/users/session', AuthUserController.handle)
router.get('/users/me', isAuthenticated, DetailUserController.handle)

router.get('/categories', isAuthenticated, listCategoryController.handle)
router.post('/categories', isAuthenticated, createCategoryController.handle)

router.post('/products', isAuthenticated, upload.single('file'), createProductController.handle)
router.get('/products', isAuthenticated, listByCategoryController.handle)

export default router

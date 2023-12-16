import { Router } from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import createCategoryController from './controllers/category/createCategoryController'
import listCategoryController from './controllers/category/listCategoryController'
import addOrderItemController from './controllers/order/addOrderItemController'
import createOrderController from './controllers/order/createOrderController'
import deleteOrderController from './controllers/order/deleteOrderController'
import createProductController from './controllers/product/createProductController'
import listByCategoryController from './controllers/product/listByCategoryController'
import AuthUserController from './controllers/user/AuthUserController'
import CreateUserController from './controllers/user/CreateUserController'
import DetailUserController from './controllers/user/DetailUserController'
import isAuthenticated from './middlewares/isAuthenticated'

const router = Router()
const upload = multer(multerConfig.upload('./tmp'))

router.get('/users/me', isAuthenticated, DetailUserController.handle)
router.post('/users', CreateUserController.handle)
router.post('/users/session', AuthUserController.handle)

router.get('/categories', isAuthenticated, listCategoryController.handle)
router.post('/categories', isAuthenticated, createCategoryController.handle)

router.get('/products', isAuthenticated, listByCategoryController.handle)
router.post('/products', isAuthenticated, upload.single('file'), createProductController.handle)

router.post('/orders', isAuthenticated, createOrderController.handle)
router.post('/orders/items', isAuthenticated, addOrderItemController.handle)
router.delete('/orders', isAuthenticated, deleteOrderController.handle)

export default router

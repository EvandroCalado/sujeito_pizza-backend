import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoryController from './controllers/category/ListCategoryController';
import AddOrderItemController from './controllers/order/AddOrderItemController';
import CreateOrderController from './controllers/order/CreateOrderController';
import DeleteOrderController from './controllers/order/DeleteOrderController';
import DeleteOrderItemController from './controllers/order/DeleteOrderItemController';
import DetailOrderController from './controllers/order/DetailOrderController';
import FinishOrderController from './controllers/order/FinishOrderController';
import ListOrderController from './controllers/order/ListOrderController';
import SendOrderController from './controllers/order/SendOrderController';
import CreateProductController from './controllers/product/CreateProductController';
import ListByCategoryController from './controllers/product/ListByCategoryController';
import AuthUserController from './controllers/user/AuthUserController';
import CreateUserController from './controllers/user/CreateUserController';
import DetailUserController from './controllers/user/DetailUserController';
import isAuthenticated from './middlewares/isAuthenticated';

const router = Router();
const upload = multer(multerConfig.upload('./tmp'));

router.get('/users/me', isAuthenticated, DetailUserController.handle);
router.post('/users', CreateUserController.handle);
router.post('/users/session', AuthUserController.handle);

router.get('/categories', isAuthenticated, ListCategoryController.handle);
router.post('/categories', isAuthenticated, CreateCategoryController.handle);

router.get('/products', isAuthenticated, ListByCategoryController.handle);
router.post(
  '/products',
  isAuthenticated,
  upload.single('file'),
  CreateProductController.handle,
);

router.get('/orders', isAuthenticated, ListOrderController.handle);
router.get('/orders/detail', isAuthenticated, DetailOrderController.handle);
router.post('/orders', isAuthenticated, CreateOrderController.handle);
router.post('/orders/items', isAuthenticated, AddOrderItemController.handle);
router.put('/orders/send', isAuthenticated, SendOrderController.handle);
router.put('/orders/finish', isAuthenticated, FinishOrderController.handle);
router.delete('/orders', isAuthenticated, DeleteOrderController.handle);
router.delete(
  '/orders/items',
  isAuthenticated,
  DeleteOrderItemController.handle,
);

export default router;

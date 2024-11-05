import { Router } from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct } from '../handlers';

const appRouter = Router();

appRouter.get('/', getAllProducts);
appRouter.get('/:id', getProduct);
appRouter.post('/create', createProduct);
appRouter.put('/update/:id', createProduct);
appRouter.delete('/delete/:id', deleteProduct);

export default appRouter;
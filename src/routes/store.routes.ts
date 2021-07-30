import { Router } from 'express'
import { getStores } from '../controllers/store.controller'
import { ValidationGetStores } from '../middlewares/store.middleware'

const router = Router();

router.get('/stores', ValidationGetStores, getStores);
router.post('/stores');
router.delete('/stores/:id')

export default router
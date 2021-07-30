import { Router } from 'express'
import { getStores } from '../controllers/store.controller'

const router = Router();

router.get('/stores', getStores);
router.post('/stores');
router.delete('/stores/:id')

export default router
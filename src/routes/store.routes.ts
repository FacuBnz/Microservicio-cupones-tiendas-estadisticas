import { Router } from 'express'
import { getStores, deleteStore, createStore } from '../controllers/store.controller'
import { ValidationGetStores } from '../middlewares/store.middleware'

const router = Router();

router.get('/stores', ValidationGetStores, getStores);
router.post('/stores', createStore);
router.delete('/stores/:id', deleteStore)

export default router
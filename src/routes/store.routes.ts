import { Router } from 'express'
import { getStores, deleteStore, createStore } from '../controllers/store.controller'
import { ValidationGetStores, validateNameAndAddress, validateIdStore } from '../middlewares/store.middleware'

const router = Router();

router.get('/stores', ValidationGetStores, getStores);
router.post('/stores', validateNameAndAddress, createStore);
router.delete('/stores/:id', validateIdStore, deleteStore)

export default router
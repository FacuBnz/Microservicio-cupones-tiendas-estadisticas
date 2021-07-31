import { Router } from 'express'
import { getCoupon } from '../controllers/coupon.controller'

const router = Router();

router.get('/coupons', getCoupon)
router.post('/coupons')
router.patch('/coupons')
router.delete('/coupons')

export default router;
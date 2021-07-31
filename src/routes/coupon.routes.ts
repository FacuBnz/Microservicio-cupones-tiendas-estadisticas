import { Router } from 'express'
import { checkCoupon } from '../controllers/coupon.controller'

const router = Router();

router.get('/coupons', checkCoupon)
router.post('/coupons')
router.patch('/coupons')
router.delete('/coupons')

export default router;
import { Router } from 'express'
import { checkCoupon, createCoupon } from '../controllers/coupon.controller'
import { validateCoupon } from '../middlewares/coupon.middleware'

const router = Router();

router.get('/coupons', checkCoupon)
router.post('/coupons', validateCoupon, createCoupon)
router.patch('/coupons')
router.delete('/coupons')

export default router;
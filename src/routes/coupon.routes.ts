import { Router } from 'express'
import { checkCoupon, createCoupon, deleteCoupon } from '../controllers/coupon.controller'
import { validateCoupon, validateIdCoupon } from '../middlewares/coupon.middleware'

const router = Router();

router.get('/coupons', checkCoupon)
router.post('/coupons', validateCoupon, createCoupon)
router.patch('/coupons')
router.delete('/coupons/:id', validateIdCoupon, deleteCoupon)

export default router;
import { Router } from 'express'
import { checkCoupon, createCoupon, assignCoupon, deleteCoupon } from '../controllers/coupon.controller'
import { validateCoupon, validateIdCoupon, validateEmail } from '../middlewares/coupon.middleware'

const router = Router();

router.get('/coupons', checkCoupon)
router.post('/coupons', validateCoupon, createCoupon)
router.patch('/coupons/:email', validateEmail, assignCoupon)
router.delete('/coupons/:id', validateIdCoupon, deleteCoupon)

export default router;
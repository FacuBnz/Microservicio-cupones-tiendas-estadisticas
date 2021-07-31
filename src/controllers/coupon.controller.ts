import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Coupon } from '../entity/Coupon'

export const getCoupon = async (req: Request, res: Response) => {
    const coupons = await getRepository(Coupon).find();
    return res.json(coupons);
}
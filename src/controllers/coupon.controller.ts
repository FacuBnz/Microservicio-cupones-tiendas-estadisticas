import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Coupon } from '../entity/Coupon'

export const checkCoupon = async (req: Request, res: Response) => {
    const { email, code } = req.query
    const coupon = await getRepository(Coupon).count({ where: { customerEmail: email, code: code } });
    if(coupon > 0){
        return res.json({msg: "code and email validated"});
    }
    return res.status(404).json({error: "not found code and email"});

}
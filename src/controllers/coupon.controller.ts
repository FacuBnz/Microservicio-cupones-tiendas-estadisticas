import { Request, Response } from 'express'
import { getRepository, IsNull } from 'typeorm'
import { Coupon } from '../entity/Coupon'

export const checkCoupon = async (req: Request, res: Response) => {
    const { email, code } = req.query
    const coupon = await getRepository(Coupon).count({ where: { customerEmail: email, code: code } });
    if(coupon > 0){
        return res.json({msg: "code and email validated"});
    }
    return res.status(404).json({error: "not found code and email"});

}

export const createCoupon = async (req: Request, res: Response) => {
    const newCoupon = getRepository(Coupon).create({...req.body, expiresAt: ()=> "now() + interval '30 day'"})
    const rs = await getRepository(Coupon).save(newCoupon);
    return res.status(201).json({coupon : rs, msg: "coupon created successfully"});
}

export const assignCoupon = async (req: Request, res: Response) => {

    const email = req.params.email;
    const coupon = await getRepository(Coupon).findOne({ where: { customerEmail: email }});

    if(coupon) return res.status(422).json({ error: "Customer already has a coupon" })

    const unassigndCoupon = await getRepository(Coupon).findOne({where: {customerEmail: IsNull()}})
    const timeNow = new Date(Date.now()+(1000*60*(-(new Date()).getTimezoneOffset()))).toISOString().replace('T',' ').replace('Z','')
    const obj = { customerEmail: email, assignedAt: timeNow }

    getRepository(Coupon).merge(<Coupon>unassigndCoupon, obj)
    getRepository(Coupon).save(<Coupon>unassigndCoupon)

    res.status(201).json({ coupon: { code: unassigndCoupon?.code } ,msg: "coupon successfully assigned"})
}

export const deleteCoupon = async (req: Request, res: Response) => {
    const id = req.params.id;
    const coupon = await getRepository(Coupon).findOne(id);
    if(!coupon) return res.status(404).json({error: "Not found coupon"})

    if(coupon?.customerEmail !== null) return res.status(405).json({error: "The coupon cannot be deleted, it has an email address assigned to it"})
    await getRepository(Coupon).delete(id)
    res.status(204).json({msg : "coupon successfully removed"});
}
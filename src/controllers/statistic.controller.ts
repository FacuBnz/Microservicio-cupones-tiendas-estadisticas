import { Request, Response } from 'express'
import { getRepository, IsNull, Not } from 'typeorm'
import { Coupon } from '../entity/Coupon'

export const getStats = async (req: Request, res: Response) => {

    const existingCoupons = await getRepository(Coupon).count()
    const allocatedCoupons = await getRepository(Coupon).count({ where: { customerEmail: Not(IsNull()) } })
    const unallocatedCoupons = await getRepository(Coupon).count({ where: { customerEmail: IsNull() } })
    const assignedByDay = await getRepository(Coupon).createQueryBuilder("coupon").select("cast(coupon.assigned_at as DATE) as DATE, count(coupon) as ASSIGNED").where("coupon.assigned_at is not null").groupBy("cast(coupon.assigned_at as DATE)").orderBy("cast(assigned_at as DATE)").getRawMany();

    const result = {
        totalCoupons: existingCoupons,
        allocatedCoupons: allocatedCoupons,
        unallocatedCoupons: unallocatedCoupons,
        couponsAssignedByDay: assignedByDay
    }

    res.json(result);
}
import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Store } from '../entity/Store'

export const getStores = async (req : Request, res: Response) => {
    const stores = await getRepository(Store).find({take: 10});
    return res.json(stores);
}
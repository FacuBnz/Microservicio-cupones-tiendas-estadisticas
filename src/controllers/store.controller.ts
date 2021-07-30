import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import { Store } from '../entity/Store'

export const getStores = async (req : Request, res: Response) => {

    const { page, name } = req.query;

    const count = await getRepository(Store).count();

    if(page){
        const stores = await getRepository(Store).find({skip: (Number(page)*10-10), take: 10});    
        return res.json({
            data: stores,
            totalStores: count
        });
        
    }
    
    if(name){
        const stores = await getRepository(Store).findOne({name: `${name}`});
        if(stores){

            return res.json({
                data: stores,
                totalStores: count
            });
        }else{
            return res.status(404).json({error: "Not found store"})
        }
    }

}
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


export const createStore = async (req : Request, res : Response) => {
    const newStore = getRepository(Store).create(req.body);
    const result = await getRepository(Store).save(newStore);
    return res.json({data: result, msg: "store created successfully"})
}


export const deleteStore = async (req: Request, res: Response) => {
    const id = req.params.id;
    const store = await getRepository(Store).delete(id);
    return res.status(204).json({ msg: "eliminated successfully" });
}
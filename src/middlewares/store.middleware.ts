import { Request, Response, NextFunction } from 'express'
import Joi from 'joi';

export const ValidationGetStores = (req: Request, res: Response, next: NextFunction) => {

    if(Object.keys(req.query).length !== 1) return res.status(400).json({error: "data incorrect"})
    const { page, name } = req.query;
    if(page === "" || name === "" || !isNaN(Number(name))) return res.status(400).json({error: "data incorrect"});
    if(page && Number(page) < 1) return res.status(400).json({error: "data incorrect"});

    next();
}

export const validateNameAndAddress = async (req: Request, res: Response, next: NextFunction) => {

    const schema = Joi.object({
        name: Joi.string().required(), 
        address: Joi.string().required()
    })
    try {
        await schema.validateAsync(req.body)
    } catch (err) {
        return res.status(422).json(err);
    }

    next();
}

export const validateIdStore = async (req: Request, res: Response, next: NextFunction) => {

    const schema = Joi.object({
        id: Joi.number().integer().positive().required()
    })
    try {
        await schema.validateAsync(req.params)
    } catch (err) {
        return res.status(400).json(err);
    }

    next();
}
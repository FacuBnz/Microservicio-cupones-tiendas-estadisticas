import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

export const validateCoupon = async (req: Request, res: Response, next: NextFunction) => {

    const schema = Joi.object({
        code: Joi.string().empty().uppercase().alphanum().min(8).max(8).required()
    })

    try {
        await schema.validateAsync(req.body)
    } catch (err) {
        return res.status(422).json(err);
    }

    next();
}
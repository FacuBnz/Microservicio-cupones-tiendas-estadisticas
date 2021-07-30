import { Request, Response, NextFunction } from 'express'

export const ValidationGetStores = (req: Request, res: Response, next: NextFunction) => {

    if(Object.keys(req.query).length !== 1) return res.status(400).json({error: "data incorrect"})
    const { page, name } = req.query;
    if(page === "" || name === "" || !isNaN(Number(name))) return res.status(400).json({error: "data incorrect"});
    if(page && Number(page) < 1) return res.status(400).json({error: "data incorrect"});

    next();
}
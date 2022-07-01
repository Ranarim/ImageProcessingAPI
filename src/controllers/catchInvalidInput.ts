import { Request, Response } from 'express'

export const catchInvalidInput = (req: Request, res: Response) => {
	const message = `This is an invalid path. Type in your request in following format:
           localhost:3001/api/images/imagename?width=+number&height=+number 
        `
	res.status(401).send(message)
}

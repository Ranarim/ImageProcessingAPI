import { Request, Response } from 'express'

export const getAPIInfo = (req: Request, res: Response) => {
	const message = `This is an API for resizing images. Type in your request in following format:
           localhost:3001/api/images/imagename?width=number&height=number --> valid imagenames are klettern, bergsteigen, kraxeln and wandern 
        `
	res.status(203).send(message)
}

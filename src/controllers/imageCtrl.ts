import { Request, Response } from 'express'
/* import imageService from '../services/imageService'
 */
/*  THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION
 */
export class imageCtrl {
	getFile(req: Request, res: Response) {
		res.download('./src/database/' + req.params.path)
	}
}

export default new imageCtrl()

import { Request, Response } from 'express'
import imageService from '../services/imageService'

/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/

class imageCtrl {
	getAndChangeImage(req: Request, res: Response) {
		//controller function to invoke getOneFile Service
		try {
			imageService.getAndChangeImage(req, res)
		} catch (err) {
			console.log(err, 'Controller not working')
		}
	}
}
export default new imageCtrl()

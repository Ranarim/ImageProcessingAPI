/* THIS COMPONENT INTERACTS WITH THE DATA BASE */
import { Request, Response } from 'express'
import { resize } from '../utils/resize'

export class imageServices {
	getAndChangeImage(req: Request, res: Response) {
		// Extract the query-parameter
		const widthString: string = req.params.width
		const heightString: string = req.params.height

		// Parse to integer if possible
		let width = 10
		let height = 10

		if (widthString) {
			width = parseInt(widthString)
		}
		if (heightString) {
			height = parseInt(heightString)
		}

		const filePath = './src/database/'.concat(req.params.path)
		// Get the resized image
		resize(filePath, width, height).pipe(res)
	}
}

export default new imageServices()

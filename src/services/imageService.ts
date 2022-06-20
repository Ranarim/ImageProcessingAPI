/* THIS COMPONENT INTERACTS WITH THE DATA BASE */
import { Request, Response } from 'express'
import * as fs from 'fs'
import sharp from "sharp"
export class imageServices {
	changeAndDisplayImage(req: Request, res: Response) {
		// define the original image path
		let imagePath = './src/database/' + req.params.pathname

		if (!fs.existsSync(imagePath)) {
			imagePath = './src/database/image-not-found.jpg'
		}

		const width = req.query.width ? parseInt(req.query.width) : 500
		const height = req.query.height ? parseInt(req.query.height) : 400

		const stream = fs.createReadStream(imagePath)

		const transform = sharp().resize(width, height)

		stream.pipe(transform).on(‘error’, (e) => {}).pipe(res);

		return stream;
	}
}

export default new imageServices()

/* THIS COMPONENT INTERACTS WITH THE DATA BASE */
import { Request, Response } from 'express'
import * as fs from 'fs'
import sharp from 'sharp'
export class imageServices {
	changeAndDisplayImage(req: Request, res: Response) {
		// define the original image path
		let imagePath = './src/database/' + req.params.imageName

		//check if the image exists
		if (!fs.existsSync(imagePath)) {
			imagePath = './src/database/image-not-found.jpg'
		}

		// set the width default and height to 300, if the query exists, than change it
		const width = req.query.width ? parseInt(req.query.width.toString()) : 300
		const height = req.query.height ? parseInt(req.query.height.toString()) : 300

		// Accessing the image with fs
		const readStream = fs.createReadStream(imagePath)

		// Change the size of the Photo
		const resizeImage = sharp().resize(width, height)

		readStream.pipe(resizeImage).pipe(res)

		return readStream
	}
}

export default new imageServices()

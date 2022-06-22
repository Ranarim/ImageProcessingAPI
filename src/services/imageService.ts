/* THIS COMPONENT INTERACTS WITH THE DATA BASE */
import { Response } from 'express'
import * as fs from 'fs'
import sharp from 'sharp'
export class imageServices {
	async editImage(res: Response, imagePath: string, width: number, height: number) {
		// Accessing the image with fs
		const readStream = fs.createReadStream(imagePath)

		// Change the size of the Photo
		const resizeImage = sharp().resize(width, height)

		readStream.pipe(resizeImage).pipe(res)

		return readStream
	}
}

export default new imageServices()

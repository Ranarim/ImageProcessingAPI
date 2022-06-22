import { Request, Response } from 'express'
import imageService from '../services/imageService'
import { Keys } from '../types/keys'
import * as fs from 'fs'

/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/

class imageCtrl {
	/* deleteAllImages(req: Request, res: Response) {
		//controller function to invoke getOneFile Service
		try {
			imageService.deleteAllImages(req, res)
		} catch (err) {
			console.log(err, 'Controller function deleteAllImages failed')
		}
	} */
	/* deleteImage(req: Request, res: Response) {
		//controller function to invoke getOneFile Service
		try {
			imageService.deleteImage(req, res)
		} catch (err) {
			console.log(err, 'Controller function deleteImage failed')
		}
	} */
	changeAndDisplayAllImages(req: Request, res: Response) {
		//controller function to invoke getOneFile Service
		try {
			const keyProperties: Keys = {
				// define the original image path
				imagePath: './src/database/',
				// set the width default and height to 300, if the query exists, than change it
				width: req.query.width ? parseInt(req.query.width.toString()) : 300,
				height: req.query.height ? parseInt(req.query.height.toString()) : 300,
			}

			const { width, height, imagePath } = keyProperties

			const images = './src/database'

			// Function to get current filenames in directory
			const filenames = fs.readdirSync(images)

			filenames.map((file) => {
				const otherPath = imagePath + '' + file
				imageService.editImage(res, otherPath, width, height)
			})
		} catch (err) {
			console.log(err, 'Controller function changeAndDisplayImage failed')
		}
	}
	changeAndDisplayImage(req: Request, res: Response) {
		//controller function to invoke getOneFile Service
		try {
			const keyProperties: Keys = {
				// define the original image path
				imagePath: './src/database/' + req.params.imageName,
				//check if it has a format, if not choose webp
				format: req.query.format ? req.query.format.toString() : 'webp',
				// set the width default and height to 300, if the query exists, than change it
				width: req.query.width ? parseInt(req.query.width.toString()) : 300,
				height: req.query.height ? parseInt(req.query.height.toString()) : 300,
			}

			const { width, height } = keyProperties
			let { imagePath } = keyProperties

			//check if the query params have valid input
			if (!fs.existsSync(imagePath)) {
				imagePath = './src/database/image-not-found.jpg'
				throw new Error('This image does not exist.')
			}

			if (width < 0 || height < 0) {
				throw new Error('The width/height cant be negative')
			}

			imageService.editImage(res, imagePath, width, height)
		} catch (err) {
			console.log(err, 'Controller function changeAndDisplayImage failed')
		}
	}
}
export default new imageCtrl()

import { Request, Response } from 'express'
import imageServices from '../services/imageService'
import { Keys } from '../types/keys'
import * as fs from 'fs'

/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/

class imageCtrl {
	changeAndDisplayImage(req: Request, res: Response) {
		//controller function to invoke getOneFile Service
		try {
			const keyProperties: Keys = {
				// define the original image path
				path: './src/database/' + '' + req.params.imageName,
				// set the width default and height to 300, if the query exists, than change it
				width: req.query.width ? parseInt(req.query.width.toString()) : 300,
				height: req.query.height ? parseInt(req.query.height.toString()) : 300,
			}

			const { width, height } = keyProperties
			let { path } = keyProperties

			if (!fs.existsSync(path)) {
				path = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'
			}

			const readStream = fs.createReadStream(path)

			const resizedImage = imageServices.changeAndDisplayImage(width, height)
			readStream.pipe(resizedImage).pipe(res)
			return readStream
		} catch (err) {
			console.log(err, 'Controller function changeAndDisplayImage failed')
		}
	}
	changeAndDisplayAllImages(req: Request, res: Response) {
		//controller function to invoke getOneFile Service
		try {
			const keyProperties: Keys = {
				// define the original image path
				path: './src/database/',
				// set the width default and height to 300, if the query exists, than change it
				width: req.query.width ? parseInt(req.query.width.toString()) : 300,
				height: req.query.height ? parseInt(req.query.height.toString()) : 300,
			}

			const { width, height, path } = keyProperties

			const filenames = fs.readdirSync(path)

			const images = filenames.map((file) => {
				const imagePath = path + '' + file
				const readStream = fs.createReadStream(imagePath)
				const resizedImage = imageServices.changeAndDisplayImage(width, height)
				console.log(imagePath)
				readStream.pipe(resizedImage)
			})

			console.log(images)
			res.send(images)

		} catch (err) {
			console.log(err, 'Controller function changeAndDisplayImage failed')
		}
	}
}

export default new imageCtrl()

import { Request, Response } from 'express'
import { editImage } from '../services/imageService'
import { imageExists } from '../utils/imageExists'
import * as fs from 'fs'
import path from 'path'

/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/

export const getImage = async (req: Request, res: Response): Promise<void> => {
	//defining the query params
	const imageName = req.params.imageName
	const width = req.query.width ? parseInt(req.query.width.toString()) : 300
	const height = req.query.width ? parseInt(req.query.width.toString()) : 300

	//defining the paths
	const originalPath = path.join(__dirname, `../database/${imageName}.jpg`)
	const newPath = path.join(__dirname, `../database/thumb/${imageName}_${width}x${height}.jpg`)

	//check if the query input is negative or 0
	if (width <= 0 || height <= 0 || !imageName) {
		console.log('Setting width or height to 0 or negative is not able in this two dimensional world')
		const message = 'You need to set the width and height to a value higher than 0 and type in a valid filename'
		res.status(401).send(message)
	}

	//check if the original photo exists
	else if (!fs.existsSync(originalPath)) {
		const notFound = path.join(__dirname, '../database/image-not-found.jpg')
		console.log('original photo does not exist')
		res.status(404).sendFile(notFound)
	}
	//check if the thumb photo already exists
	else if (!imageExists(imageName, width, height)) {
		console.log('thumb photo does not exist, so creating new one')
		await editImage(newPath, imageName, width, height)
		res.status(200).sendFile(newPath)
	}
	// send back the existing photo
	else {
		console.log('sending back the existing thumb photo')
		res.status(202).sendFile(newPath)
	}
}

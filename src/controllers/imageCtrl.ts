import { Request, Response } from 'express'
/* import { editImage } from '../services/imageService'
 */ import * as fs from 'fs'
import path from 'path'

/* THIS CONTROLLER WILL PARSE THE REQUEST AND CALL THE RIGHT SERVICE ACTION*/

const imageExists = (imageName: string, width: number, height: number): boolean => {
	const pathExist = path.join(__dirname, `../database/thumb/${imageName}_${width}x${height}.jpg`)
	console.log(fs.existsSync(pathExist))
	console.log(pathExist)
	return fs.existsSync(pathExist)
}

export const getImage = async (req: Request, res: Response): Promise<void> => {
	//defining the query params
	const imageName = req.params.imageName
	const width = req.query.width ? parseInt(req.query.width.toString()) : 300
	const height = req.query.width ? parseInt(req.query.width.toString()) : 300

	const originalPath = path.join(__dirname, `../database/${imageName}.jpg`)

	//check if the original photo exists
	if (!fs.existsSync(originalPath)) {
		const notFound = path.join(__dirname, '../database/image-not-found.jpg')
		console.log('original photo does not exist')
		res.status(400).sendFile(notFound)
	}
	//check if the thumb photo already exists
	else if (!imageExists(imageName, width, height)) {
		console.log('thumb photo does not exist, so creating new one')
	}
	// sending back the existing photo
	else {
		console.log('sending back the existing thumb photo')
		const existingImage = path.join(__dirname, `../database/thumb/${imageName}.jpg`)
		res.sendFile(existingImage)
	}
}

import path from 'path'
import fs from 'fs'

export const imageExists = (imageName: string, width: number, height: number): boolean => {
	const pathExist = path.join(__dirname, `../database/thumb/${imageName}_${width}x${height}.jpg`)
	return fs.existsSync(pathExist)
}

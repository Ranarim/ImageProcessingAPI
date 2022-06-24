/* THIS COMPONENT INTERACTS WITH THE DATA BASE */
import sharp from 'sharp'

export class imageServices {
	changeAndDisplayImage(width: number, height: number) {
		//check if the query params have valid input
		// Change the size of the Photo
		const resizeImage = sharp().resize(width, height)
		return resizeImage
	}
}

export default new imageServices()

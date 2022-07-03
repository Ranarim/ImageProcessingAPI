import sharp from 'sharp'
/* THIS COMPONENT INTERACTS WITH THE DATA BASE */

export const editImage = async (newPath: string, imageName: string, width: number, height: number) => {
	//check if the query params have valid input
	try {
		const resizedImage = await sharp(`./src/database/${imageName}.jpg`).resize(width, height).toFile(newPath)
		console.log(typeof resizedImage)
		return resizedImage
	} catch {
		throw new Error('Image processing failed')
	}
}

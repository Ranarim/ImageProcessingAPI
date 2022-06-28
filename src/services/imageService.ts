/* THIS COMPONENT INTERACTS WITH THE DATA BASE */

export const editImage = (imageName: string, width: number, height: number) => {
	//check if the query params have valid input
	try {
		console.log(imageName, width, height)
	} catch {
		throw new Error('Image processing failed')
	}
}

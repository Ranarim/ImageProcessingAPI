import path from 'path'
import { editImage } from '../../src/services/imageService'

describe('Testing the Services and the resize functionality', () => {
	test('check if the service works if the input is valid', async (): Promise<void> => {
		const imageName = 'klettern'
		const width = 200
		const height = 200
		const newPath = path.join(__dirname, `../../src/database/thumb/${imageName}_${width}x${height}.jpg`)
		const data = await editImage(newPath, imageName, width, height)
		expect(typeof data).toBe('object')
	})
	test('check if the service throws error if the input is not valid', async (): Promise<void> => {
		const imageName = 'klettern'
		const width = 0
		const height = -200
		const newPath = path.join(__dirname, `../../src/database/thumb/${imageName}_${width}x${height}.jpg`)
		await expect(editImage(newPath, imageName, width, height)).rejects.toThrow('Image processing failed')
	})
})

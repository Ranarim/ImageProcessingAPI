import app from '../../src/index'
import request from 'supertest'
import fs from 'fs'
import path from 'path'

const deleteFiles = () => {
	const directory =
		'/Users/johannesmaier/Desktop/Code/Masterschool Projects/ImageProcessingAPI/node-app/src/database/thumb'

	fs.readdir(directory, (err, files) => {
		if (err) throw err

		for (const file of files) {
			fs.unlink(path.join(directory, file), (err) => {
				if (err) throw err
			})
		}
	})
}

beforeAll(() => {
	deleteFiles()
})
afterAll(() => {
	// Closing the DB connection allows Jest to exit successfully.
	deleteFiles()
})

describe('Testing Controller and fs functionality', () => {
	test('check if the status is 203 if there are no params', async (): Promise<void> => {
		const data = await request(app).get('/')
		expect(data.status).toBe(203)
	})
	test('check if the status is 401 if the input is not valid', async (): Promise<void> => {
		const data = await request(app).get('/asdfasdfasdf')
		expect(data.status).toBe(401)
	})
	test('check if the status is 401 when the query input is negative, 0 or not a number', async (): Promise<void> => {
		const data = await request(app).get('/api/images/klettern?width=asdasd&height=-100')
		expect(data.status).toBe(401)
	})
	test('check if the status is 404 if image doesnt exist', async (): Promise<void> => {
		const data = await request(app).get('/api/images/krxln')
		expect(data.status).toBe(404)
	})
	test('check if the status is 200 if the thumb is created', async (): Promise<void> => {
		const data = await request(app).get('/api/images/klettern?width=888&height=888')
		expect(data.status).toBe(200)
	})
	test('check if the status is 202 if the thumb already exists', async (): Promise<void> => {
		const data = await request(app).get('/api/images/klettern?width=888&height=888')
		expect(data.status).toBe(202)
	})
})

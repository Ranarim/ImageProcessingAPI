import app from '../../src/index'
import request from 'supertest'

describe('Testing Controller and fs functionality', () => {
	test('check if the status is 400 if image doesnt exist', async (): Promise<void> => {
		const data = await request(app).get('/api/images/krxln')
		expect(data.status).toBe(404)
	})
	test('check if the status is 200 if the thumb is created', async (): Promise<void> => {
		const data = await request(app).get('/api/images/klettern?width=888&height=888')
		expect(data.status).toBe(200)
	})
	test('check if the status is 202 if the thumb already exists', async (): Promise<void> => {
		const data = await request(app).get('/api/images/klettern?width=500&height=500')
		expect(data.status).toBe(202)
	})
})

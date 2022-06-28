import app from '../../src/index'
import request from 'supertest'

describe('Testing Controller and fs functionality', (): void => {
	test('check if the status is 400 if image doesnt exist', () => {
		request(app).get('/api/images/krxln').expect(404)
	})
	test('check if the status is 200 if the thumb is created', () => {
		request(app).get('/api/images/klettern?width=500&height=500').expect(200)
	})
	test('check if the status is 202 if the thumb already exists', () => {
		request(app).get('/api/images/klettern?width=500&height=500').expect(200)
	})
})

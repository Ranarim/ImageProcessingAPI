# How to test the App

There are three tests in the set. The goal of them is to test three different cases:

1. The req.param is not existing, the original photo does not exist. As an example I just wrote krxln instead of "kraxeln" which is bavarian slang for climbing:

test('check if the status is 400 if image doesnt exist', async (): Promise<void> => {
const data = await request(app).get('/api/images/krxln')
expect(data.status).toBe(404)
})

2. The req.param is valid, the original photo does exist, BUT the version of this photo in the thumb including the width and the height is not existing.

test('check if the status is 200 if the thumb is created', async (): Promise<void> => {
const data = await request(app).get('/api/images/klettern?width=888&height=888')
expect(data.status).toBe(200)
})

3. The req.param is valid, the original photo AND the version of this photo in the thumb exists

test('check if the status is 202 if the thumb already exists', async (): Promise<void> => {
const data = await request(app).get('/api/images/klettern?width=888&height=888')
expect(data.status).toBe(202)
})

## NOTE: If the app is already running on port 4040, the test will not work. You need to and the node server

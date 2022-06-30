import express, { Application } from 'express'

import router from './routes/imageRouter'

export const app: Application = express()

/* ROUTES */
app.use('/api/images', router)

/* LISTENING */
const PORT = 8080
app.listen(PORT, (): void => console.log(`running on port ${PORT}`))

export default app

import express, { Application } from 'express'

import router from './routes/imageRouter'

export const app: Application = express()

/* ROUTES */
app.use('/', router)

/* LISTENING */
const PORT = 3001
app.listen(PORT, (): void => console.log(`running on port ${PORT}`))

export default app

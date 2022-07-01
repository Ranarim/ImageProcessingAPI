import { Router } from 'express'
import { getImage } from '../controllers/getImageController'
import { getAPIInfo } from '../controllers/getAPIInfo'
import { catchInvalidInput } from '../controllers/catchInvalidInput'

const router = Router()

router.get('/api/images/:imageName', getImage)
router.get('/', getAPIInfo)
router.get('/:invalidInput', catchInvalidInput)

export default router

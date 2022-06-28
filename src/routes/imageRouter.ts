import { Router } from 'express'
import { getImage } from '../controllers/getImageController'

const router = Router()

router.get('/:imageName', getImage)

export default router

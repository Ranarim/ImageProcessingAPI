import { Router } from 'express'
import { getImage } from '../controllers/imageCtrl'

const router = Router()

router.get('/:imageName', getImage)

export default router

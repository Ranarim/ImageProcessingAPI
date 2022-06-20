import { Router } from 'express'
import imageCtrl from '../controllers/imageCtrl'

const router = Router()

router.get('/:imageName', imageCtrl.getAndChangeImage)

export default router

import { Router } from 'express'
import imageCtrl from '../controllers/imageCtrl'

const router = Router()

router.get('/', imageCtrl.changeAndDisplayAllImages)
router.get('/:imageName', imageCtrl.changeAndDisplayImage)

export default router

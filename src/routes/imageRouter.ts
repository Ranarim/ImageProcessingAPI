import { Router } from 'express'
import imageCtrl from '../controllers/imageCtrl'

const router = Router()

/* router.delete('/', imageCtrl.deleteAllImages)
router.delete('/:imageName', imageCtrl.deleteImage)*/
router.get('/', imageCtrl.changeAndDisplayAllImages)
router.get('/:imageName', imageCtrl.changeAndDisplayImage)

export default router

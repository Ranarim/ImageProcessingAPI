import { Router } from 'express'
import imageCtrl from '../controllers/imageCtrl'

const router = Router()

router.get('/:path', imageCtrl.getFile)

export default router

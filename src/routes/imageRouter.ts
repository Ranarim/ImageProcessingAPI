import { Router } from 'express'
import imageCtrl from '../controllers/imageCtrl'

const router = Router()

router.get('/:path/:width/:height', imageCtrl.getAndChangeImage)

export default router

import { Router } from 'express'
import { createUser, getUserData } from '../src/controllers/users.controller.js'
import { verifyToken } from '../middleware/verifyToken.js'

const router = Router()

router.post('/usuarios', createUser)
router.get('/usuarios',verifyToken, getUserData)

export default router
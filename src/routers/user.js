// after /user the reamainning part is handled here
import express from'express'
import { getProfile } from '../controllers/userController.js';

const router = express.Router()

router.get('/profile', getProfile)

export default router;
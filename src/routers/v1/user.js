// after /user the reamainning part is handled here
import express from'express'
import { getProfile, signup } from '../../controllers/userController.js';
import { zodSignupSchema } from '../../velidators/zodSignupSchema.js';
import { validate } from '../../velidators/zodVelidator.js';

const router = express.Router()

router.get('/profile', getProfile)

router.post('/signup', validate(zodSignupSchema), signup)

export default router;
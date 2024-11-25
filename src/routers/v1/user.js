// after /user the reamainning part is handled here
import express from'express'
import { getProfile, signin, signup } from '../../controllers/userController.js';
import { zodSignupSchema } from '../../velidators/zodSignupSchema.js';
import { validate } from '../../velidators/zodVelidator.js';
import { zodSigninSchema } from '../../velidators/zodSigninSchema.js';

const router = express.Router()

router.get('/profile', getProfile)

router.post('/signup', validate(zodSignupSchema), signup)

router.post('/signin', validate(zodSigninSchema), signin);

export default router;
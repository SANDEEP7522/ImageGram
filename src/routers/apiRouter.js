
import express from 'express';
import v1Ruter from './v1/v1Router.js'
import v2Ruter from './v2/v2Router.js'


const router = express.Router();

router.use('/v1', v1Ruter)
router.use('/v2', v2Ruter)

export default router;
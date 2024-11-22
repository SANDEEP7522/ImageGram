// here the post releted route present
// we look at the remaining url part after/post

import express from 'express';
import { creatPost, getAllPosts } from '../controllers/postController.js';
import { s3uploader } from '../config/multerConfig.js';

const router = express.Router();// router object to modularsize the routes

router.post('/posts',  s3uploader.single('image') , creatPost);

router.get('/posts', getAllPosts)

export default router;
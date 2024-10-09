import express from 'express';
import connectDB from './config/dbConfig.js';
import { creatPost } from './controllers/postController.js';

const PORT = 3000;
const app = express();

app.get('/ping', (req, res) => {
    return res.json({ message: 'Pong' })
 })

// middlewere
 
//  function m1(req, res, next) {
//     console.log('m1');
//     next();
//  }
//  function m2(req, res, next) {
//     console.log('m2');
//     next();
//  }
//  function m3(req, res, next) {
//     console.log('m3');
//     next();
//  }            
//                          [m1, m2, m3],
 app.post('/posts',                             creatPost);
 
app.listen(PORT, () => {
    console.log(`Server is running port nnumber: ${ PORT }`);
    connectDB(); 
})


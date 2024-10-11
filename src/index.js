import express from 'express';
import connectDB from './config/dbConfig.js';
import { creatPost } from './controllers/postController.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded())

app.get('/ping', (req, res) => {
    console.log(req.query);
    console.log(req.body);
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
 app.post('/posts',     s3uploader.single() ,             creatPost);
 
app.listen(PORT, () => {
    console.log(`Server is running port nnumber: ${ PORT }`);
    connectDB(); 
})


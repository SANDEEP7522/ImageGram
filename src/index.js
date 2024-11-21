import express from 'express';
import connectDB from './config/dbConfig.js';
import { creatPost } from './controllers/postController.js';
import { s3uploader } from './config/multerConfig.js';

const PORT = process.env.PORT || 8000;
const app = express();

 app.use(express.json()); // allow to send data like json
 app.use(express.text()); // like test
 app.use(express.urlencoded())

app.get('/ping', (req, res) => {
    console.log(req.query);
    
    // const name = req.params.name; // (here yout get )
    console.log(req.query);
    console.log(req.body);
    return res.send({ message: 'pong' })
 })
              
 
 app.post('/posts',  s3uploader.single('image') ,   creatPost);
//  app.post('/posts', uploader.single('My_Picture'),  creatPost); 
 
app.listen(PORT, () => {
    console.log(`Server is running port nnumber: ${ PORT }`);
    connectDB(); 
})


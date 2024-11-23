import express from 'express';
import connectDB from './config/dbConfig.js';
//import postRouter  from "./routers/post.js";
import apiRouter from './routers/apiRouter.js'
  

const PORT = process.env.PORT || 8000;
const app = express();

 app.use(express.json());
 app.use(express.text());
 app.use(express.urlencoded())

 app.use('/api', apiRouter); // if the url start with /api then the request is forworded to the apiRouter

app.get('/ping', (req, res) => {
    console.log(req.query);
    
    // const name = req.params.name; // (here yout get )
    console.log(req.query);
    console.log(req.body);
    return res.send({ message: 'pong' })
 })
              

 
app.listen(PORT, () => {
    console.log(`Server is running port nnumber: ${ PORT }`);
    connectDB(); 
})


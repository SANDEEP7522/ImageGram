import express from 'express';
import connectDB from './config/dbConfig.js';

const PORT = 3000;
const app = express();

// app.get('/', (req, res) => {
//     return res.send('Home');
// })

app.get('/ping', (req, res) => {
    return res.json({ message: 'Pong' })
 })
// app.get('/hello', (req, res) => {
//    return res.json({ message: 'hello I am here' })
// })
app.listen(PORT, () => {
    console.log(`Server is running port nnumber: ${ PORT }`);
    connectDB(); 
})

